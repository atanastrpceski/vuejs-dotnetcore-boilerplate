using Boilerplate.Application.Features.Products.Commands.Create;
using Boilerplate.Application.Features.Products.Queries.GetAllCached;
using Boilerplate.Application.Features.Products.Queries.GetAllPaged;
using Boilerplate.Application.Features.Products.Queries.GetById;
using Boilerplate.Domain.Entities.Catalog;
using AutoMapper;

namespace Boilerplate.Application.Mappings
{
    internal class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<CreateProductCommand, Product>().ReverseMap();
            CreateMap<GetProductByIdResponse, Product>().ReverseMap();
            CreateMap<GetAllProductsCachedResponse, Product>().ReverseMap();
            CreateMap<GetAllProductsResponse, Product>().ReverseMap();
        }
    }
}