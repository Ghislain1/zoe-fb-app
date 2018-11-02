using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Models
{
    [Table("Models")]
    public class Model
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string  Name { get; set; }
        public Make Make { get; set; }
        public int MakeId { get; set; } //TODO why? es gibt erkärung --> see Buidling the Domain Model


    }
}
