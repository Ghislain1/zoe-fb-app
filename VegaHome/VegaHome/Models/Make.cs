using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace VegaHome.Models
{
    public class Make
    {
        public Make()
        {
            this.Models = new Collection<Model>();
        }

        public int Id { get; set; }
        public ICollection<Model> Models { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }
    }
}