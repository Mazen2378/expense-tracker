import React ,{memo} from 'react';



const Tooltip:React.FC<any> = ({data,position,visibility}:{data:any;position:any;visibility:any}) => {


    return (
        <>
            <div className={`absolute px-4 py-1  rounded-lg shadow-lg bg-chart-label-gradient text-white  transition-all duration-300
                `}
                style={{
                    top: visibility ? position?.top: -100,
                    left: position?.left,
                    backgroundColor: '#070707',
                    opacity: visibility ? 1 : 0 }}
            >
               {data && (
                   <>
                       <h5 className="w-full  block text-[10px] uppercase">
                           {data.title}
                       </h5>
                       <ul className="divide-y divide-white">
                           {data.dataPoints.map((val:any,index:number)=> {
                               return (
                                   <>
                                       <li key={index} style={
                                       {display: 'flex', alignItems: 'center', gap: 5}
                                       }>
                                       <div className="color" style={{
                                           width:10,
                                           height:10,
                                           backgroundColor: val?.dataset.borderColor ,
                                           opacity: 1
                                       }}></div>
                                       <p  className="m-0 text-[9px] text-left capitalize last:pb-0"> {val?.dataset.label} {":"} {val?.raw}</p>
                                       </li>

                                   </>
                               )
                           })}
                       </ul>
                   </>
               )}
            </div>
        </>
    )
};

export default memo(Tooltip);
