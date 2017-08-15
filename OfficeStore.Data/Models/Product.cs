﻿using System;
using System.Collections.Generic;
using System.Text;

namespace OfficeStore.Data.Models
{
   public  class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price{ get; set; }
        public string ImageUrl { get; set; }
    }
}
