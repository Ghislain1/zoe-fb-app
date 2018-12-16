using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZoeHome.Application.Interface;
using ZoeHome.Domain.Entities;
using ZoeHome.Persistence;

namespace ZoeHome.WebUI.Services
{
    public class MockDataImportService : IMockDataImportService
    {
        public bool EnsureAlbumData(ZoeHomeDbContext zoeHomeDbContext, string jsonDataFilePath)
        {
            bool hasData = false;
            try
            {
                hasData = zoeHomeDbContext.Albums.Any();
            }
            catch
            {
                zoeHomeDbContext.Database.EnsureCreated(); // just create the schema - no migrations
                hasData = zoeHomeDbContext.Albums.Any();
            }

            if (!hasData)
            {
                string json = System.IO.File.ReadAllText(jsonDataFilePath);
                return ImportFromJson(zoeHomeDbContext, json) > 0;
            }

            return true;
        }

        /// <summary>
        /// Imports data from json
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        private int ImportFromJson(ZoeHomeDbContext zoeHomeDbContext, string json)
        {
            var albums = JsonConvert.DeserializeObject<Album[]>(json);

            foreach (var album in albums)
            {
                // clear out primary/identity keys so insert works
                album.Id = 0;
                album.ArtistId = 0;
                album.Artist.Id = 0;

                var existingArtist = zoeHomeDbContext.Artists.Where(a => a.ArtistName == album.Artist.ArtistName).FirstOrDefault();
                if (existingArtist == null)
                {
                    zoeHomeDbContext.Artists.Add(album.Artist);
                }
                else
                {
                    album.Artist = existingArtist;
                    album.ArtistId = existingArtist.Id;
                }

                if (album.Tracks != null)
                {
                    foreach (var track in album.Tracks)
                    {
                        track.Id = 0;
                        zoeHomeDbContext.Add(track);
                    }
                }
                zoeHomeDbContext.Add(album);

                try
                {
                    zoeHomeDbContext.SaveChanges();
                }
                catch
                {
                    Console.WriteLine("Error adding: " + album.ArtistId);
                }
            }

            var user = new User()
            {
                Username = "test",
                Password = "test",
                Fullname = "Test User",
            };
            zoeHomeDbContext.Users.Add(user);
            zoeHomeDbContext.SaveChanges();

            return 1;
        }
    }
}