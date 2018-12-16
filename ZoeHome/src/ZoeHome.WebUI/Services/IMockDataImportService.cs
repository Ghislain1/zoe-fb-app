using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Persistence;

namespace ZoeHome.WebUI.Services
{
    //TODO: /Should move this to persistence projects !!!
    public interface IMockDataImportService
    {
        bool EnsureAlbumData(ZoeHomeDbContext zoeHomeDbContext, string jsonDataFilePath);
    }
}