import React from "react";

function NewsItem({ urlToImage, title, description, author, publishedAt, url}) {
  const timeSince = (date) => {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  return (
      urlToImage && <div className="shadow bg-white flex flex-col md:flex-row lg:h-[200px] md:h-[190px] max-h-max relative">
      <img className="md:w-[250px]" src={urlToImage} alt="" />
      <div className="p-2 mt-1">
        <h4 className="text-[19px] leading-[25px] poppins font-semibold">{title.length > 60 ? title.slice(0, 60) + '...' : title }</h4>
        <p className="py-2.5 leading-[20px] pb-4 md:pb-0 lg:mb-2 poppins text-[#222]">{description.length > 80 ? description.slice(0, 80) + '...' : description }</p>
        <div className= "md:absolute bottom-2 text-gray-500 text-sm mt-auto ">
          <p>{author.split(' ').length > 2 ? author.split(' ')[0] + author.split(' ')[0]  : author } <span className="font-bold">|</span> {timeSince(new Date(publishedAt))}</p>
        </div>
        <a rel="noreferrer" target='_blank' href={url} className="py-1.5 px-2 bg-purple-600 hover:bg-purple-700 cursor-pointer text-white rounded-sm font-semibold absolute bottom-1.5 right-2">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
