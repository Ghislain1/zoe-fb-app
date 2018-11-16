using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Options;
using VegaComp.Controllers.Resources;
using VegaComp.Interfaces;
using VegaComp.Models;

namespace VegaComp.Controllers
{
    [Route("/api/vehicles/{vehicleId}/photos")]
    public class PhotosController : Controller // The endpoint for this api is: /api/vehicles/1/photos
    {
        private readonly IHostingEnvironment hostingEnvironment;
        private readonly IMapper mapper;
        private readonly IOptionsSnapshot<PhotoSettings> optionsSnapshot;
        private readonly IPhotoRepository photoRepository;
        private readonly PhotoSettings photoSettings;
        private readonly IUnitOfWork unitOfWork;
        private readonly IVehicleRepository vehicleRepository;
        // TODO: interface to provide all value  registred in configure<T> of servies

        public PhotosController(IPhotoRepository photoRepository, IHostingEnvironment hostingEnvironment, IUnitOfWork unitOfWork, IVehicleRepository vehicleRepository, IMapper mapper, IOptionsSnapshot<PhotoSettings> optionsSnapshot)  // TODO: IFormFile is a abstratction of file!!!
        {
            this.hostingEnvironment = hostingEnvironment;
            this.vehicleRepository = vehicleRepository;
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
            this.optionsSnapshot = optionsSnapshot;
            this.photoRepository = photoRepository;

            // stored the photoSettings from snapsshop!!!--> cool
            this.photoSettings = this.optionsSnapshot.Value;
        }

        [HttpGet]
        public async Task<IEnumerable<PhotoResource>> GetPhotos(int vehicleId)
        {
            var photos = await this.photoRepository.GetPhotos(vehicleId);

            return mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoResource>>(photos);
        }

        [HttpPost]
        public async Task<IActionResult> Upload(int vehicleId, IFormFile formFile) // why paramter --> because of {?} --> IFormFile diff? IFormCollection
        {
            //get vehicle from gevin Id
            var vehicle = await this.vehicleRepository.GetVehicle(vehicleId, false);
            if (vehicle == null)
            {
                return NotFound();
            }

            // 3Check to do
            if (formFile == null)
            {
                return BadRequest("Null file "); //  TODO:  how we use Badrequest()_Method
            }
            if (formFile.Length == 0)
            {
                return BadRequest("Empty  file "); //  TODO:  how we use Badrequest()_Method
            }

            if (this.photoSettings.MaxBytes < formFile.Length)
            {
                return BadRequest("File  too big !!  "); //  TODO:  how we use Badrequest()_Method
            }

            //TODO: remove this logic to PhotoSettings.cs
            var currenfileType = Path.GetExtension(formFile.FileName).ToLower();
            if (!this.photoSettings.AcceptedFileTypes.Any(fileType => fileType == currenfileType))
            {
                return BadRequest("Wrong File Type  too big !!  "); //  TODO:  how we use Badrequest()_Method
            }

            var uploadsFolderPath = Path.Combine(this.hostingEnvironment.WebRootPath, "Uploads");
            if (!Directory.Exists(uploadsFolderPath))
            {
                Directory.CreateDirectory(uploadsFolderPath);
            }

            // file.png muss been changed because of hacker --->
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(formFile.FileName);
            var filePath = Path.Combine(uploadsFolderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await formFile.CopyToAsync(stream);
            }

            //Create Photo object --> //System.Drawing -->  does'n ecist iin dotnet core.
            var photo = new Photo() { FileName = fileName };
            vehicle.Photos.Add(photo);
            await this.unitOfWork.CompleteAsync();

            var photoToRturn = this.mapper.Map<Photo, PhotoResource>(photo);
            return Ok(photoToRturn);
        }
    }
}