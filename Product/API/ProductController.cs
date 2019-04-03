using Product.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Runtime.Caching;

namespace Product.API
{
    public class ProductController : ApiController
    {
        BProduct [] _products = new BProduct[]
            {
                new BProduct{ID=1, Category="Watches", Price=3333, Title="Titan Watch" },
                new BProduct{ID=2, Category="Watches", Price=7999, Title="Casio Watch" },
                new BProduct{ID=3, Category="Electronics", Price=9999, Title="Samsung Mobile Phone" },
                new BProduct{ID=6, Category="Electronics", Price=30000, Title="Apple IPad" },
                new BProduct{ID=8, Category="Storage Devices", Price=259, Title="Moserbaer Pen Drive" },
                new BProduct{ID=11, Category="Watches", Price=123333, Title="Rolex Watch" },
                new BProduct{ID=21, Category="Computers", Price=47999, Title="HP Notebook" },
                new BProduct{ID=31, Category="Garments", Price=999, Title="Nike Boys T Shirt" },
                new BProduct{ID=61, Category="Garments", Price=500, Title="Round Neck T Shirt" },
                new BProduct{ID=81, Category="Jewellery", Price=22259, Title="Gitanjli Ear Rings" }
            };
        MemoryCache memoryCache;

        private void InitCache()
        {
            memoryCache = MemoryCache.Default;
            if (memoryCache["products"] == null)
            {
                memoryCache["products"] = this._products;
            }
        }
        // GET api/<controller>
        public IEnumerable<BProduct> Get()
        {
            InitCache();
            return (BProduct[])memoryCache["products"];
        }

        // GET api/<controller>/5
        public BProduct Get(int id)
        {
            if (id == -1)
            {
                RefreshCache();
                return null;
            }
            InitCache();
            return ((BProduct[])memoryCache["products"]).First(x => x.ID == id);
        }

        // POST api/<controller>
        public void Post([FromBody]BProduct p)
        {
            InitCache();
            BProduct[] products = (BProduct[])memoryCache["products"];
            p.ID = products.Max(x => x.ID) + 1;
            Array.Resize(ref products, products.Length + 1);
            products[products.Length - 1] = p;
            memoryCache["products"] = products;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]BProduct pn)
        {
            InitCache();
            BProduct[] products = (BProduct[])memoryCache["products"];

            foreach (BProduct p in products)
            {
                if (p.ID == id)
                {
                    p.Title = pn.Title;
                    p.Category = pn.Category;
                    p.Price = pn.Price;
                    break;
                }
            }
            memoryCache["products"] = products;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            InitCache();
            BProduct[] products = (BProduct[])memoryCache["products"];
            if (products.First(x => x.ID == id) != null)
            {
                BProduct[] tproducts = new BProduct[products.Length - 1];
                int i = 0;
                foreach (BProduct p in products)
                {
                    if (p.ID != id)
                    {
                        BProduct pn = new BProduct();
                        pn.ID = p.ID;
                        pn.Title = p.Title;
                        pn.Category = p.Category;
                        pn.Price = p.Price;

                        tproducts[i++] = pn;
                    }
                }
                memoryCache["products"] = tproducts;
            }
        }

        private void RefreshCache()
        {
            memoryCache = MemoryCache.Default;
            memoryCache["products"] = this._products;
        }
    }
}