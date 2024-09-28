import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, MapPin, Users, X } from "lucide-react";
import { useDrives } from "../utils/useDrives";
import ImageGallery from "../components/ImageGallery";
import { dateFormatter } from "../utils/dateFormatter";

const DriveDetail = () => {
  const { id } = useParams();
  const { getDriveById } = useDrives();
  const drive = getDriveById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!drive) {
    return <div>Drive not found</div>;
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white font-raleway">
      <div className="bg-indigo-950 sm:h-64 h-36 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-red-700 opacity-75"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white relative z-10">
            {drive.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative mt-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden -mt-16 relative z-20">
          <div className="p-8">
            <p className="text-indigo-950 sm:text-xl text-sm tracking-wide leading-relaxed mb-6">
              {drive.description}
            </p>
            <div className="flex flex-wrap gap-6 text-indigo-950">
              <div className="flex items-center sm:text-xl text-sm">
                <Calendar className="mr-2 text-red-700 sm:size-6 size-4" />
                <span>
                  {drive.from && drive.to
                    ? drive.from === drive.to
                      ? dateFormatter(drive.from)
                      : `${dateFormatter(drive.from)} - ${dateFormatter(
                          drive.to
                        )}`
                    : drive.from
                    ? dateFormatter(drive.from)
                    : drive.to
                    ? dateFormatter(drive.to)
                    : "No date"}
                </span>
              </div>
              <div className="flex items-center sm:text-xl text-sm">
                <MapPin className="mr-2 text-red-700 sm:size-6 size-4" />
                <span>{drive.location}</span>
              </div>
              <div className="flex items-center sm:text-xl text-sm">
                <Users className="mr-2 text-red-700 sm:size-6 size-4" />
                <span>{drive.volunteers} Volunteers</span>
              </div>
            </div>
          </div>
        </div>

        <ImageGallery images={drive.images} />
      </div>
    </div>
  );
};

export default DriveDetail;
