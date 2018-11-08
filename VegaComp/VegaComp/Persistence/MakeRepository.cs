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
    public class MakeRepository : IMakeRepository
    {
        private readonly VegaDbContext vegaDbContext;

        public MakeRepository(VegaDbContext vegaDbContext)
        {
            this.vegaDbContext = vegaDbContext;
        }

        public void Add(Make make)
        {
            this.vegaDbContext.Makes.Add(make);
        }

        public async Task<Make> GetMake(int id, bool includeRelated = true)
        {
            if (!includeRelated)
            {
                return await this.vegaDbContext.Makes.FindAsync(id);
            }
            var res = await this.vegaDbContext.Makes
                                                .Include(m => m.Models)
                                                        .SingleOrDefaultAsync(make => make.Id == id);
            return res;
        }

        public async Task<QueryResult<Make>> GetMakes(MakeQuery filter)
        {
            var result = new QueryResult<Make>();
            var makeListQueryable = this.vegaDbContext.Makes
                                                        .Include(make => make.Models).AsQueryable();

            //Apply filter
            makeListQueryable = this.ApplyFiltering(makeListQueryable, filter);

            //Apply Sort
            var columnsMap = new Dictionary<string, Expression<Func<Make, object>>>()
            {
                ["name"] = make => make.Name,
                ["id"] = make => make.Id
            };
            makeListQueryable = this.ApplyOrdering(makeListQueryable, filter, columnsMap);

            //Apply Paging
            makeListQueryable = this.ApplyPaging(makeListQueryable, filter);

            return result;
        }

        public void Remove(Make make)
        {
            this.vegaDbContext.Makes.Remove(make);
        }

        private IQueryable<Make> ApplyFiltering(IQueryable<Make> query, MakeQuery queryObj)
        {
            if (queryObj.IsAfricaManifacturer)
            {
                query = query.Where(v => v.Name.StartsWith("A"));
            }

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