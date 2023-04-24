import Categories from "./Categories";
import SortBy from "./SortBy";

function VideoCollectionNavbar() {
  return (
    <div className="flex justify-between flex-col sm:flex-row">
      <h1 className="text-4xl font-bold">Video Collections</h1>

      <div className="flex justify-center gap-2 items-center z-[1]">
        <Categories />
        <SortBy />
      </div>
    </div>
  );
}

export default VideoCollectionNavbar;
