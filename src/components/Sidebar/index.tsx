import {FC, Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {MenuIcon} from '@heroicons/react/outline';
import {shortenAddress} from 'utils';
import {User} from 'components/User';

type SidebarProps = {
	openSidebar: () => any;
	isOpenSidebar: boolean;
};

export const Sidebar: FC<SidebarProps> = ({isOpenSidebar, openSidebar}) => {

  return (
  	<Popover>
	    <div className="bg-white border-r border-gray-200 h-full" style={{color: '#33932e'}}>
	      <div className={isOpenSidebar ? "w-64" : "w-12"}>
	      	<div className="flex">
	      		<div className="flex my-4">
		          <Popover.Button className="bg-white rounded-md px-3 pt-4 pb-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
		            <span className="sr-only">Open menu</span>
		            {isOpenSidebar ? (
		            	<svg viewBox="0 0 24 24" width="24px" color="green" xmlns="http://www.w3.org/2000/svg" style={{fill: '#33932e'}} onClick={() => openSidebar(false)}>
			            	<path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path>
			            </svg>
		            ) : (
		            	<svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" style={{fill: '#33932e'}} onClick={() => openSidebar(true)}>
			            	<path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path>
			            </svg>
		            )}
		          </Popover.Button>
		          {isOpenSidebar ? (
		          	<a href="#" className="flex">
			            <img width="170" height="40" src="/img/logobig.png"></img>
			          </a>
		          ) : null}
		        </div>
	      	</div>
	      	{isOpenSidebar ? (
	      		<>
			      	<div className="border-b border-gray-200 w-full p-4">
			      		<p className="mb-4 text-xl font-black">Auction Type</p>
			      		<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 rounded mr-2" style={{backgroundColor: '#89d695'}}>English</span>
			      		<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 rounded mr-2" style={{backgroundColor: '#89d695'}}>Dutch</span>
			      	</div>
			      	<div className="border-b border-gray-200 w-full p-4">
			      		<p className="mb-4 text-xl font-black">Auction Status</p>
			      		<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 rounded mr-2" style={{backgroundColor: '#89d695'}}>Live Auction</span>
			      		<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 rounded mr-2" style={{backgroundColor: '#89d695'}}>Ended Auction</span>
			      		<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 rounded mr-2" style={{backgroundColor: '#89d695'}}>English</span>
			      	</div>
			      	<div className="border-b border-gray-200 w-full p-4">
			      		<p className="mb-4 text-xl font-black">Categories</p>
			      		<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							    <option>Option 1</option>
							    <option>Option 2</option>
							    <option>Option 3</option>
							  </select>
			      	</div>
			      	<div className="border-b border-gray-200 p-4">
			      		<p className="mb-4 text-xl font-black">Countries</p>
			      		<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							    <option>Option 1</option>
							    <option>Option 2</option>
							    <option>Option 3</option>
							  </select>
			      	</div>
			      	<div className="border-b border-gray-200 p-4">
			      		<p className="mb-4 text-xl font-black">CO2 Offset</p>
			      		<div className="mt-2">
							    <div>
							      <label className="inline-flex items-center">
							        <input type="checkbox" className="form-checkbox" />
							        <span className="ml-2">0 - 5 kg/year</span>
							      </label>
							    </div>
							    <div>
							      <label className="inline-flex items-center">
							        <input type="checkbox" className="form-checkbox" />
							        <span className="ml-2">5 - 20 kg/year</span>
							      </label>
							    </div>
							    <div>
							      <label className="inline-flex items-center">
							        <input type="checkbox" className="form-checkbox" />
							        <span className="ml-2">20 - 100 kg/year</span>
							      </label>
							    </div>
							    <div>
							      <label className="inline-flex items-center">
							        <input type="checkbox" className="form-checkbox" />
							        <span className="ml-2">100 - 1000 kg/year</span>
							      </label>
							    </div>
							  </div>
			      	</div>
			      	<div className="border-b border-gray-200 p-4">
			      		<div className="flex justify-between w-full mb-4">
			      			<p className="text-xl font-black" >Price</p>
				      		<select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline">
								    <option>Option 1</option>
								    <option>Option 2</option>
								    <option>Option 3</option>
								  </select>
			      		</div>
			      		<div className="flex justify-between w-full mb-4">
			      			<input className="shadow appearance-none border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-20 border" type="text" /> -
			      			<input className="shadow appearance-none border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-20 border" type="text" />
			      		</div>
			      		<button className="bg-transparent font-semibold py-2 px-4 border border-gray-400 rounded w-full">
								  Apply Price Filter
								</button>
			      	</div>
			      </>
	      	) : null}
	      </div>
	    </div>
	  </Popover>
  );
};
