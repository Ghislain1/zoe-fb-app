using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using VegaComp.Interfaces;
using VegaComp.Models;

namespace VegaComp.Persistence
{
    public class ModelRepository : IModelRepository
    {
        private readonly VegaDbContext vegaDbContext;

        public ModelRepository(VegaDbContext vegaDbContext)
        {
            this.vegaDbContext = vegaDbContext;
        }

        public void Add(Model Model)
        {
            this.vegaDbContext.Models.Add(Model);
        }

        public async Task<Model> GetModel(int id)
        {
            return await this.vegaDbContext.Models.FindAsync(id);
        }

        public async Task<QueryResult<Model>> GetModels(ModelQuery filter)
        {
            var result = new QueryResult<Model>();
            var ModelListQueryable = this.vegaDbContext.Models.AsQueryable();

            //Apply filter
            ModelListQueryable = this.ApplyFiltering(ModelListQueryable, filter);

            //Apply Sort
            var columnsMap = new Dictionary<string, Expression<Func<Model, object>>>()
            {
                ["name"] = Model => Model.Name,
                ["id"] = Model => Model.Id
            };
            ModelListQueryable = this.ApplyOrdering(ModelListQueryable, filter, columnsMap);

            //Apply Paging
            ModelListQueryable = this.ApplyPaging(ModelListQueryable, filter);

            return result;
        }

        public void Remove(Model Model)
        {
            this.vegaDbContext.Models.Remove(Model);
        }

        private IQueryable<Model> ApplyFiltering(IQueryable<Model> query, ModelQuery queryObj)
        {
            //if (queryObj.IsAfricaManifacturer)
            //{
            //    query = query.Where(v => v.Name.StartsWith("A"));
            //}

            return query;
        }

        private IQueryable<T> ApplyOrdering<T>(IQueryable<T> query, IQueryObject queryObj, Dictionary<string, Expression<Func<T, object>>> columnsMap)
        {
            if (String.IsNullOrWhiteSpace(queryObj.SortBy) || !columnsMap.ContainsKey(queryObj.SortBy))
            {
                return query;
            }

            if (queryObj.IsSortAscending)
            {
                return query.OrderBy(columnsMap[queryObj.SortBy]);
            }
            else
            {
                return query.OrderByDescending(columnsMap[queryObj.SortBy]);
            }
        }

        private IQueryable<T> ApplyPaging<T>(IQueryable<T> query, IQueryObject queryObj)
        {
            if (queryObj.Page <= 0)
            {
                queryObj.Page = 1;
            }

            if (queryObj.PageSize <= 0)
            {
                queryObj.PageSize = 10;
            }

            //TODO: you see how we use skip and take methods!!!
            return query.Skip((queryObj.Page - 1) * queryObj.PageSize).Take(queryObj.PageSize);
        }
    }
}