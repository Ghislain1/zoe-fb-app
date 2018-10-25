namespace vega.Models {

    using System.Collections.Generic;
    using System.Collections;
    using System;

    /// e.g BMV, Merceds, Mazda.!--.
    public class Make {
        public Make () {

            Models = new List<Model> ();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Model> Models { get; set; }
    }
}