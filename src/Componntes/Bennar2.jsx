import React, { useContext } from 'react';
import Container from './Container';
import { ApiData } from './ContextApi';

const Bennar2 = () => {

    let data = useContext(ApiData);

    return (
        <section className="bg-[#f5f5f7] py-16 text-[#1d1d1f] w-full">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-semibold max-w-xl leading-tight tracking-tight">
                        <span className="text-black">Store.</span>{' '}
                        <span className="text-[#6e6e73]">
                            The best way to buy the products you love.
                        </span>
                    </h1>

                    <div className="flex flex-col gap-4 text-sm font-semibold pt-2">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309?wid=70&hei=70&fmt=jpeg"
                                alt="Specialist"
                                className="w-9 h-9 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-[#1d1d1f]">Need shopping help?</p>
                                <a href="#" className="text-[#0066cc] hover:underline font-normal">Ask a Specialist</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 flex items-center justify-center text-xl">
                                
                            </div>
                            <div>
                                <p className="text-[#1d1d1f]">Visit an Apple Store</p>
                                <a href="#" className="text-[#0066cc] hover:underline font-normal">Find one near you</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 overflow-x-auto pb-6 pt-2 px-4 no-scrollbar scroll-smooth">
                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[0]?.thumbnail} alt={data[0]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[0]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[1]?.thumbnail} alt={data[1]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[1]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[2]?.thumbnail} alt={data[2]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[2]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[3]?.thumbnail} alt={data[3]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[3]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[4]?.thumbnail} alt={data[4]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[4]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[5]?.thumbnail} alt={data[5]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[5]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[6]?.thumbnail} alt={data[6]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[6]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[7]?.thumbnail} alt={data[7]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[7]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[8]?.thumbnail} alt={data[8]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[8]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[9]?.thumbnail} alt={data[9]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[9]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[10]?.thumbnail} alt={data[10]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[10]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[11]?.thumbnail} alt={data[11]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[11]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[12]?.thumbnail} alt={data[12]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[12]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[13]?.thumbnail} alt={data[13]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[13]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[14]?.thumbnail} alt={data[14]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[14]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[15]?.thumbnail} alt={data[15]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[15]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[16]?.thumbnail} alt={data[16]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[16]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[17]?.thumbnail} alt={data[17]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[17]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[18]?.thumbnail} alt={data[18]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[18]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[19]?.thumbnail} alt={data[19]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[19]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[20]?.thumbnail} alt={data[20]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[20]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[21]?.thumbnail} alt={data[21]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[21]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[22]?.thumbnail} alt={data[22]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[22]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[23]?.thumbnail} alt={data[23]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[23]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[24]?.thumbnail} alt={data[24]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[24]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[25]?.thumbnail} alt={data[25]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[25]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[26]?.thumbnail} alt={data[26]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[26]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[27]?.thumbnail} alt={data[27]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[27]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[28]?.thumbnail} alt={data[28]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[28]?.title || "Mac"}</span>
                    </div>

                    <div className="flex flex-col items-center justify-between min-w-25 p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer group shrink-0">
                        <div className="h-28 w-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                            <img src={data[29]?.thumbnail} alt={data[29]?.title || "Product Image"} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-black text-center line-clamp-1">{data[29]?.title || "Mac"}</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Bennar2;