namespace ZoeHome.Domain.Entities
{
    public class Artist
    {
        public string AmazonUrl { get; set; }
        public string ArtistName { get; set; }
        public string Description { get; set; }
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        //public List<Album> Albums { get; set; }
    }
}