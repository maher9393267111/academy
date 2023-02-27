import Link from "next/link";

export default function Blogs({ blogs }) {
    const description = (str) => {
        if ((str === null) || (str === '')) {
            return '';
        } else {
            str = str.toString();
        }
        const newStr = str.replace(/(<([^>]+)>)/gi, '')
        return newStr.length >= 150 ? newStr.slice(0, 150) + "..." : newStr
    }
    const title = (data) => {
        return data.length >= 50 ? data.slice(0, 50) + "..." : data
    }
    return (
        <div classNameName="flex  grid-cols-2 flex-wrap justify-center gap-10 py-10 px-16 sm:px-8">
            {blogs.map((data) => (
                <Link href={`/blogs/${data.id}`} key={data.id} passHref classNameName="min-h-full">
                    {/* <article classNameName="overflow-hidden rounded-lg shadow transition hover:shadow-xl max-w-sm sm:w-[24rem] w-80">
                        <img
                            alt="Office"
                            src={data.image}
                            classNameName="h-56 w-full object-cover"
                            loading="lazy"
                        />

                        <div classNameName="bg-white p-4 sm:p-6">
                            <time classNameName="block text-xs text-gray-500 pb-2">
                                {data.date}
                            </time>

                            <h3 classNameName="mt-0.5 text-lg md:text-xl text-gray-900 font-cutiveMono tracking-tighter font-semibold">
                                {title(data.title)}
                            </h3>

                            <p classNameName="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 font-poppins">
                                {description(data.description)}...
                            </p>
                        </div>
                    </article> */}



<div className="single-course-inner w-full">
                                <div className="thumb">
                                    <img 
                                     
                                     alt="Office"
                                     src={data.image}
                                     classNameName="h-56 w-full object-cover"
                                     loading="lazy"
                                    
                                    
                                    />
                                </div>
                                <div className="details">
                                    <div className="details-inner">
                                        <div className="emt-user">
                                            <span className="u-thumb"><img src="assets/img/author/1.png" alt="img"/></span>
                                            <span className="align-self-center">ADMIN</span>
                                        </div>

                                        <h3 classNameName="mt-0.5 text-lg md:text-xl text-gray-900 font-cutiveMono tracking-tighter font-semibold">
                                {title(data.title)}
                            </h3>

                                        <h6><a href="">
                                        {description(data.description)}...
                                            </a></h6>
                                    </div>
                                    <div className="emt-course-meta">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="rating">
                                                    <i className="fa fa-star"></i> 4.3
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="price text-right">
                                                     <span>  {data.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                </Link>
            ))}
        </div>
    )
}
