import React from "react";

// component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilter.component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOCBOb3Ygb253YXJkcw%3D%3D,ots-30,otc-FFFFFF,oy-620,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-55/et00051378-cabrhkzdmt-portrait.jpg" title="Punha sahi" subtitle="Telugu"/>
                            </div>

                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOCBOb3Ygb253YXJkcw%3D%3D,ots-30,otc-FFFFFF,oy-620,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-55/et00051378-cabrhkzdmt-portrait.jpg" title="Punha sahi" subtitle="Telugu"/>
                            </div>

                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOCBOb3Ygb253YXJkcw%3D%3D,ots-30,otc-FFFFFF,oy-620,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-55/et00051378-cabrhkzdmt-portrait.jpg" title="Punha sahi" subtitle="Telugu"/>
                            </div>

                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOCBOb3Ygb253YXJkcw%3D%3D,ots-30,otc-FFFFFF,oy-620,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-55/et00051378-cabrhkzdmt-portrait.jpg" title="Punha sahi" subtitle="Telugu"/>
                            </div>

                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxOCBOb3Ygb253YXJkcw%3D%3D,ots-30,otc-FFFFFF,oy-620,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-55/et00051378-cabrhkzdmt-portrait.jpg" title="Punha sahi" subtitle="Telugu"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/12">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilter title="Language" tags={["Tamil", "Telugu", "English"]} />
                        </div>
                    </div>
                </div>

                <div>
                </div>
            </div>
        </>
    );
};

export default Plays;