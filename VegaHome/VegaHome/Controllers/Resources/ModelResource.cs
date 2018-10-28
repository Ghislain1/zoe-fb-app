namespace VegaHome.Controllers.Resources
{
    public class ModelResource
    {
        public int Id { get; set; }

        ///--> this uas eLOOP problem
        /// public Make Make { get; set; }
        public int MakeId { get; set; }

        public string Name { get; set; }
    }
}