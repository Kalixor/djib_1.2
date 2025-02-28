import React from 'react'

    export default function Screen() {
      return (
        <div className="flex flex-col bg-[#FFFFFF]">
	<div className="self-stretch bg-[#081028] h-[1850px]">
		<div className="items-start self-stretch relative mt-[27px] ml-[27px] mr-[27px]">
			<div className="self-stretch pt-[3px] pb-[51px] ml-[1px] mr-[1px]">
				<div className="flex flex-col items-end self-stretch mb-[757px]">
					<button className="flex items-center bg-[#0A1330] text-left w-[127px] pt-[11px] pb-[11px] pl-[9px] pr-[9px] mr-[1px] rounded-[4px] border-0"
						onClick={()=>alert("Pressed!")}>
						<span className="flex-1 text-[#FFFFFF] text-[12px] font-bold" >
							{"Exporter donnée"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/y9m8wgxf.png"} 
							className="w-[10px] h-[10px] object-fill"
						/>
					</button>
				</div>
				<div className="items-start self-stretch relative mb-[24px]">
					<div className="self-stretch">
						<div className="flex flex-col items-center self-stretch pt-[6px] pb-[6px] mb-[14px] mr-[758px]">
							<span className="text-[#FFFFFF] text-[24px] font-bold" >
								{"Réalisation des Recettes"}
							</span>
						</div>
						<div className="self-stretch ml-[1px] mr-[1px]">
							<div className="flex flex-col items-end self-stretch">
								<button className="flex items-center bg-[#0A1330] text-left w-[127px] pt-[11px] pb-[11px] pl-[10px] pr-[10px] rounded-[4px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="flex-1 text-[#FFFFFF] text-[12px] font-bold" >
										{"Exporter donnée"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/tvy7m1xo.png"} 
										className="w-[10px] h-[10px] object-fill"
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center bg-[#0A1330] w-[110px] absolute bottom-[-1px] left-[1px] rounded-[4px] border-[1px] border-solid border-[#0B1739]" 
						style={{
							boxShadow: "1px 1px 1px #0F183466"
						}}>
						<div className="flex items-center w-[92px] pt-[1px] pb-[1px] mt-[9px] mb-[9px]">
							<div className="flex items-start mr-[12px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/04j4vx9z.png"} 
									className="w-[10px] h-[10px] mr-[4px] object-fill"
								/>
								<span className="text-[#ADB9E1] text-[10px] font-bold" >
									{"Select date"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/e9bf198r.png"} 
								className="w-[12px] h-[12px] object-fill"
							/>
						</div>
					</div>
				</div>
				<div className="self-stretch">
					<div className="self-stretch">
						<div className="flex flex-col items-end self-stretch">
							<div className="w-[513px] pt-[30px] pb-[4px] rounded-[12px] border-[1px] border-solid border-[#0B1739]" 
								style={{
									boxShadow: "1px 1px 1px #0F183466"
								}}>
								<div className="self-stretch mb-[28px] ml-[30px] mr-[16px]">
									<div className="flex flex-col items-start self-stretch pt-[8px] pb-[8px]">
										<span className="text-[#FFFFFF] text-[16px] font-bold" >
											{"Paiements récents par type"}
										</span>
									</div>
									<div className="flex flex-col items-end self-stretch">
										<div className="bg-[#0A1330] w-[113px] pt-[9px] pb-[9px] rounded-[4px] border-[1px] border-solid border-[#0B1739]" 
											style={{
												boxShadow: "1px 1px 1px #0F183466"
											}}>
											<div className="flex items-center self-stretch pt-[1px] pb-[1px] ml-[9px] mr-[24px]">
												<div className="flex flex-1 flex-col items-center">
													<div className="flex flex-col items-start w-[56px]">
														<div className="flex flex-col items-start self-stretch">
															<img
																src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/891t15p4.png"} 
																className="w-[10px] h-[10px] object-fill"
															/>
														</div>
														<span className="text-[#ADB9E1] text-[10px] font-bold ml-[14px]" >
															{"Jan 2024"}
														</span>
													</div>
												</div>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/d0p2au70.png"} 
													className="w-[12px] h-[12px] object-fill"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="self-stretch relative">
									<div className="flex flex-col self-stretch pb-[46px]">
										<div className="flex items-start self-stretch mb-[16px] ml-[30px] mr-[30px]">
											<div className="flex items-start">
												<div className="flex flex-col items-center bg-[#CB3CFF] p-[3px] mr-[6px] rounded-[2px] border-[1px] border-solid border-[#CB3CFF]" 
													style={{
														boxShadow: "1px 1px 1px #0F183466"
													}}>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/8avhwi5k.png"} 
														className="w-[5px] h-[5px] object-fill"
													/>
												</div>
												<span className="text-[#FFFFFF] text-[10px] font-bold mt-[1px] mb-[1px]" >
													{"Order"}
												</span>
											</div>
											<div className="flex-1 self-stretch">
											</div>
											<div className="flex items-center pt-[1px] pb-[1px] mr-[95px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/r0qc7f4a.png"} 
													className="w-[10px] h-[10px] mr-[4px] object-fill"
												/>
												<div className="flex flex-col items-center pt-[2px] pb-[2px]">
													<span className="text-[#FFFFFF] text-[10px] font-bold" >
														{"Date"}
													</span>
												</div>
											</div>
											<div className="flex items-center pt-[1px] pb-[1px] mr-[93px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/wpo3nzf1.png"} 
													className="w-[10px] h-[10px] mr-[4px] object-fill"
												/>
												<div className="flex flex-col items-center pt-[2px] pb-[2px]">
													<span className="text-[#FFFFFF] text-[10px] font-bold" >
														{"Status"}
													</span>
												</div>
											</div>
											<span className="text-[#FFFFFF] text-[10px] font-bold mt-[2px] mb-[2px]" >
												{"Total"}
											</span>
										</div>
										<div className="self-stretch bg-[#0A1330] h-[46px] mb-[8px]">
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/wlg1g6j5.png"} 
											className="self-stretch h-[1px] mb-[13px] object-fill"
										/>
										<div className="flex items-center self-stretch pt-[2px] pb-[2px] mb-[14px] ml-[28px] mr-[28px]">
											<div className="flex items-center pt-[1px] pb-[1px]">
												<div className="bg-[#0B1739] w-[12px] h-[12px] mr-[7px] rounded-[2px] border-[1px] border-solid border-[#7E89AC]">
												</div>
												<span className="text-[#FFFFFF] text-[10px] font-bold" >
													{"#1531"}
												</span>
											</div>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold mr-[59px]" >
												{"Dec 29, 2:59 AM"}
											</span>
											<div className="flex flex-col items-center bg-[#FFAF1633] pt-[2px] pb-[2px] pl-[6px] pr-[6px] mr-[69px] rounded-[2px] border-[1px] border-solid border-[#FFAF1633]">
												<div className="flex items-center pt-[6px] pb-[6px]">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/qouadv1e.png"} 
														className="w-[3px] h-[3px] mr-[5px] object-fill"
													/>
													<span className="text-[#FCB52A] text-[10px] font-bold" >
														{"Pending"}
													</span>
												</div>
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold" >
												{"$ 117.24"}
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/dzgrqkdc.png"} 
											className="self-stretch h-[1px] mb-[13px] object-fill"
										/>
										<div className="flex items-center self-stretch pt-[2px] pb-[2px] mb-[5px] ml-[28px] mr-[28px]">
											<div className="flex items-center pt-[1px] pb-[1px]">
												<div className="bg-[#0B1739] w-[12px] h-[12px] mr-[7px] rounded-[2px] border-[1px] border-solid border-[#7E89AC]">
												</div>
												<span className="text-[#FFFFFF] text-[10px] font-bold" >
													{"#1530"}
												</span>
											</div>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold mr-[54px]" >
												{"Dec 29, 12:54 AM"}
											</span>
											<div className="flex flex-col items-center bg-[#FFAF1633] pt-[2px] pb-[2px] pl-[6px] pr-[6px] mr-[73px] rounded-[2px] border-[1px] border-solid border-[#FFAF1633]">
												<div className="flex items-center pt-[6px] pb-[6px]">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/5259a9bu.png"} 
														className="w-[3px] h-[3px] mr-[5px] object-fill"
													/>
													<span className="text-[#FCB52A] text-[10px] font-bold" >
														{"Pending"}
													</span>
												</div>
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold" >
												{"$ 52.16"}
											</span>
										</div>
										<div className="self-stretch bg-[#0A1330] h-[46px] mb-[9px]">
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/s03iz1by.png"} 
											className="self-stretch h-[1px] mb-[13px] object-fill"
										/>
										<div className="flex items-center self-stretch pt-[2px] pb-[2px] ml-[28px] mr-[28px]">
											<div className="flex items-center pt-[1px] pb-[1px]">
												<div className="bg-[#0B1739] w-[12px] h-[12px] mr-[7px] rounded-[2px] border-[1px] border-solid border-[#7E89AC]">
												</div>
												<span className="text-[#FFFFFF] text-[10px] font-bold" >
													{"#1528"}
												</span>
											</div>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold mr-[59px]" >
												{"Dec 27, 2:20 PM"}
											</span>
											<div className="flex flex-col items-center bg-[#FFAF1633] pt-[2px] pb-[2px] pl-[6px] pr-[6px] mr-[65px] rounded-[2px] border-[1px] border-solid border-[#FFAF1633]">
												<div className="flex items-center pt-[6px] pb-[6px]">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/nv7cgj5o.png"} 
														className="w-[3px] h-[3px] mr-[5px] object-fill"
													/>
													<span className="text-[#FCB52A] text-[10px] font-bold" >
														{"Pending"}
													</span>
												</div>
											</div>
											<span className="text-[#ADB9E1] text-[10px] font-bold" >
												{"$ 246.78"}
											</span>
										</div>
									</div>
									<div className="self-stretch bg-[#0A1330] h-[45px] absolute bottom-[-4px] right-[0px] left-[0px]">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch bg-[#0B1739] relative pt-[28px] pb-[28px] mr-[532px] rounded-[12px] border-[1px] border-solid border-[#0B1739]" 
						style={{
							boxShadow: "1px 1px 1px #0F183466"
						}}>
						<div className="self-stretch pb-[65px] ml-[35px] mr-[35px]">
							<div className="self-stretch h-[1px] mb-[16px] mr-[438px]">
							</div>
							<div className="flex flex-col items-start self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ohe0ahdm.png')] relative pt-[77px] pb-[104px] ml-[94px] mr-[94px] object-fill">
								<div className="flex flex-col items-center self-stretch pt-[10px] pb-[21px] ml-[69px] mr-[69px]">
									<span className="text-[#FFFFFF] text-[36px] font-bold" >
										{"23,648"}
									</span>
								</div>
								<span className="text-[#7E89AC] text-[14px] font-bold absolute bottom-[103px] left-[69px]" >
									{"Recettes par état"}
								</span>
							</div>
						</div>
						<div className="flex flex-col w-[439px] absolute bottom-[30px] left-[35px]">
							<div className="flex flex-col items-start self-stretch relative mb-[14px]">
								<div className="self-stretch pt-[1px] pb-[1px]">
									<div className="flex items-center self-stretch pt-[5px] pb-[5px] mr-[313px]">
										<div className="bg-[#CB3CFF] w-[7px] h-[7px] mr-[10px] rounded-[80px]">
										</div>
										<span className="text-[#ADB9E1] text-[14px]" >
											{"Recette effective"}
										</span>
									</div>
								</div>
								<span className="text-[#D9E0F9] text-[16px] font-bold absolute bottom-[-1px] right-[0px]" >
									{"15,624"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/zs9s6kso.png"} 
								className="self-stretch h-[1px] mb-[13px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch relative mb-[14px]">
								<div className="self-stretch pt-[1px] pb-[1px]">
									<div className="flex items-center self-stretch pt-[5px] pb-[5px] mr-[303px]">
										<div className="bg-[#9991FA] w-[7px] h-[7px] mr-[10px] rounded-[80px]">
										</div>
										<span className="text-[#ADB9E1] text-[14px]" >
											{"Recette en attente"}
										</span>
									</div>
								</div>
								<span className="text-[#D9E0F9] text-[16px] font-bold absolute bottom-[-1px] right-[0px]" >
									{"5,546"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/npfusqfo.png"} 
								className="self-stretch h-[1px] mb-[13px] object-fill"
							/>
							<div className="self-stretch pt-[1px] pb-[1px]">
								<div className="flex items-center self-stretch pt-[5px] pb-[5px] mr-[285px]">
									<div className="bg-[#00C1FF] w-[7px] h-[7px] mr-[10px] rounded-[80px]">
									</div>
									<span className="text-[#ADB9E1] text-[14px]" >
										{"Recette non recouvré"}
									</span>
								</div>
							</div>
						</div>
						<span className="text-[#D9E0F9] text-[16px] font-bold absolute bottom-[29px] right-[39px]" >
							{"2,478"}
						</span>
					</div>
				</div>
			</div>
			<div className="w-[1045px] absolute top-[0px] left-[0px]">
				<div className="flex items-center self-stretch relative pt-[4px] pb-[4px] mt-[3px] mb-[17px] mr-[134px]">
					<span className="flex-1 text-[#FFFFFF] text-[24px] font-bold" >
						{"Activités des Douanes"}
					</span>
					<span className="text-[#ADB9E1] text-[12px] absolute top-[38px] left-[0px]" >
						{"Surveiller les activités douanières en temps réel"}
					</span>
					<div className="flex flex-col items-center bg-[#0A1330] p-[9px] rounded-[4px] border-[1px] border-solid border-[#0B1739]" 
						style={{
							boxShadow: "1px 1px 1px #0F183466"
						}}>
						<div className="flex flex-col items-start">
							<div className="flex items-start">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/y6xntrd9.png"} 
									className="w-[10px] h-[10px] object-fill"
								/>
								<div className="self-stretch w-[10px]">
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/so2eqpec.png"} 
									className="w-[14px] h-[12px] object-fill"
								/>
							</div>
							<span className="text-[#FFFFFF] text-[12px] font-bold ml-[18px]" >
								{"Annuelle"}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center w-[1046px] absolute top-[75px] left-[0px]">
				<div className="flex items-start w-[1046px] mb-[573px]">
					<div className="flex flex-1 flex-col items-start bg-[#0B1739] relative pt-[20px] pb-[20px] rounded-[8px] border-[1px] border-solid border-[#343A4E]">
						<div className="self-stretch pt-[1px] pb-[47px] ml-[20px] mr-[20px]">
							<div className="flex items-center self-stretch pt-[1px] pb-[1px] pr-[24px] mr-[125px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ytg1k4v8.png"} 
									className="w-[12px] h-[13px] mr-[5px] object-fill"
								/>
								<span className="text-[#ADB9E1] text-[12px] font-bold" >
									{"Imports"}
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/r91z3cye.png"} 
							className="w-[16px] h-[16px] absolute top-[20px] right-[19px] object-fill"
						/>
						<div className="flex flex-col items-center w-[120px] absolute bottom-[17px] left-[20px]">
							<div className="flex items-start w-[120px] mt-[6px] mb-[2px]">
								<span className="flex-1 text-[#FFFFFF] text-[24px] font-bold" >
									{"50.8K"}
								</span>
								<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] mt-[1px] mb-[1px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
									<div className="flex items-center pt-[3px] pb-[3px]">
										<span className="text-[#14C973] text-[10px] font-bold mr-[3px]" >
											{"28.4%"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/lb1zsk4e.png"} 
											className="w-[8px] h-[8px] object-fill"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 items-start bg-[#0B1739] relative pt-[20px] pb-[20px] rounded-[8px] border-[1px] border-solid border-[#343A4E]">
						<div className="flex items-start self-stretch pt-[1px] pb-[47px] ml-[20px] mr-[20px]">
							<div className="flex items-start">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/otyos59w.png"} 
									className="w-[13px] h-[13px] mr-[5px] object-fill"
								/>
								<span className="text-[#ADB9E1] text-[12px] font-bold mt-[2px] mb-[2px]" >
									{"Exports"}
								</span>
							</div>
							<div className="flex-1 self-stretch">
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/xxxvi2ig.png"} 
								className="w-[16px] h-[16px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-center w-[117px] absolute bottom-[17px] left-[20px]">
							<div className="flex items-start w-[117px] mt-[6px] mb-[2px]">
								<span className="flex-1 text-[#FFFFFF] text-[24px] font-bold" >
									{"23.6K"}
								</span>
								<div className="flex flex-col items-center bg-[#FF5A6433] pt-[2px] pb-[2px] pl-[4px] pr-[4px] mt-[1px] mb-[1px] rounded-[2px] border-[1px] border-solid border-[#FF5A6433]">
									<div className="flex items-center pt-[3px] pb-[3px]">
										<span className="text-[#FF5A64] text-[10px] font-bold mr-[4px]" >
											{"12.6%"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/t7pnbnel.png"} 
											className="w-[8px] h-[8px] object-fill"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col items-start bg-[#0B1739] relative pt-[20px] pb-[20px] rounded-[8px] border-[1px] border-solid border-[#343A4E]">
						<div className="flex flex-col items-start self-stretch relative pt-[1px] pb-[47px] ml-[19px] mr-[19px]">
							<div className="flex flex-col items-start self-stretch mr-[76px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/jf81lfiz.png"} 
									className="w-[14px] h-[14px] object-fill"
								/>
							</div>
							<span className="text-[#ADB9E1] text-[12px] font-bold absolute top-[4px] left-[19px]" >
								{"Nombre de Bureaux"}
							</span>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/75kmxh9c.png"} 
							className="w-[16px] h-[16px] absolute top-[20px] right-[20px] object-fill"
						/>
						<div className="flex flex-col items-center w-[90px] absolute bottom-[17px] left-[19px]">
							<div className="flex items-start w-[90px] mt-[6px] mb-[2px]">
								<span className="flex-1 text-[#FFFFFF] text-[24px] font-bold" >
									{"756"}
								</span>
								<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] mt-[1px] mb-[1px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
									<div className="flex items-center pt-[3px] pb-[3px]">
										<span className="text-[#14C973] text-[10px] font-bold mr-[4px]" >
											{"3.1%"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/rxd8bx7p.png"} 
											className="w-[8px] h-[8px] object-fill"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 items-start bg-[#0B1739] relative pt-[20px] pb-[20px] rounded-[8px] border-[1px] border-solid border-[#343A4E]">
						<div className="flex justify-between items-start self-stretch ml-[20px] mr-[20px]">
							<div className="flex items-start mb-[46px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/z6zy08m8.png"} 
									className="w-[17px] h-[16px] mr-[5px] object-fill"
								/>
								<span className="text-[#ADB9E1] text-[12px] font-bold mt-[4px] mb-[4px]" >
									{"Recettes Totales"}
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ixksuwr9.png"} 
								className="w-[16px] h-[16px] mb-[46px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-center w-[101px] absolute bottom-[17px] left-[20px]">
							<div className="flex items-start w-[101px] mt-[6px] mb-[2px]">
								<span className="flex-1 text-[#FFFFFF] text-[24px] font-bold" >
									{"2.3K"}
								</span>
								<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] mt-[1px] mb-[1px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
									<div className="flex items-center pt-[3px] pb-[3px]">
										<span className="text-[#14C973] text-[10px] font-bold mr-[3px]" >
											{"11.3%"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/zl3b3hza.png"} 
											className="w-[8px] h-[8px] object-fill"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center w-[1046px] absolute top-[192px] left-[0px]">
				<div className="flex items-start w-[1046px]">
					<div className="flex-1 items-start bg-[#0B1739] relative pt-[42px] pb-[42px] border-[1px] border-solid border-[#343A4E]" 
						style={{
							boxShadow: "1px 1px 1px #0F183466"
						}}>
						<div className="self-stretch ml-[42px] mr-[42px]">
							<div className="flex justify-between items-start self-stretch mb-[28px]">
								<div className="flex flex-col items-start">
									<span className="text-[#ADB9E1] text-[14px] font-bold mb-[10px]" >
										{"Recettes Dounières"}
									</span>
									<div className="flex items-center pt-[7px] pb-[7px]">
										<span className="text-[#FFFFFF] text-[24px] font-bold mr-[9px]" >
											{"$240.8K"}
										</span>
										<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
											<div className="flex items-center pt-[2px] pb-[2px]">
												<span className="text-[#14C973] text-[10px] font-bold mr-[4px]" >
													{"24.6%"}
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/tsfgeml5.png"} 
													className="w-[8px] h-[8px] object-fill"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-center pt-[8px] pb-[8px] mt-[12px] mb-[12px]">
									<div className="flex items-start mr-[33px]">
										<div className="flex items-center pt-[3px] pb-[3px] mr-[24px]">
											<div className="bg-[#CB3CFF] w-[7px] h-[7px] mr-[9px] rounded-[80px]">
											</div>
											<span className="text-[#ADB9E1] text-[12px] font-bold" >
												{"Effective"}
											</span>
										</div>
										<div className="flex items-center pt-[3px] pb-[3px]">
											<div className="bg-[#00C1FF] w-[7px] h-[7px] mr-[9px] rounded-[80px]">
											</div>
											<span className="text-[#ADB9E1] text-[12px] font-bold" >
												{"Prévue"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center bg-[#0A1330] p-[9px] rounded-[4px] border-[1px] border-solid border-[#0B1739]" 
										style={{
											boxShadow: "1px 1px 1px #0F183466"
										}}>
										<div className="flex items-center pt-[1px] pb-[1px]">
											<div className="flex flex-col items-center mr-[12px]">
												<div className="flex flex-col items-start">
													<div className="flex flex-col items-center pr-[99px]">
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/222powzu.png"} 
															className="w-[10px] h-[10px] object-fill"
														/>
													</div>
													<span className="text-[#ADB9E1] text-[10px] font-bold ml-[14px]" >
														{"Jan 2024 - Dec 2024"}
													</span>
												</div>
											</div>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/0n69gyad.png"} 
												className="w-[12px] h-[12px] object-fill"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch">
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"250K"}
									</span>
								</div>
								<div className="self-stretch bg-[#0B1739] h-[1px] mb-[42px] ml-[48px] mr-[1px]">
								</div>
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px] mb-[43px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"200K"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch relative mb-[44px] ml-[2px] mr-[2px]">
									<div className="self-stretch h-[14px]">
									</div>
									<span className="text-[#ADB9E1] text-[12px] font-bold absolute bottom-[-1px] left-[0px]" >
										{"150K"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px] mb-[43px] ml-[2px] mr-[2px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"100K"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px] mb-[43px] ml-[7px] mr-[7px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"50K"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px] mb-[44px] ml-[7px] mr-[7px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"25K"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pt-[2px] pb-[2px] ml-[14px] mr-[1px]">
									<span className="text-[#ADB9E1] text-[12px] font-bold" >
										{"0K"}
									</span>
								</div>
								<div className="self-stretch bg-[#0B1739] h-[1px] mb-[21px] ml-[48px] mr-[1px]">
								</div>
								<div className="flex items-center self-stretch pt-[3px] pb-[3px] ml-[56px] mr-[27px]">
									<span className="flex-1 text-[#ADB9E1] text-[10px] font-bold" >
										{"Jan"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Feb"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[27px]" >
										{"Mar"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Apr"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[28px]" >
										{"May"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[28px]" >
										{"Jun"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Jul"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Aug"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[28px]" >
										{"Sep"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Oct"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold mr-[29px]" >
										{"Nov"}
									</span>
									<span className="text-[#ADB9E1] text-[10px] font-bold" >
										{"Dec"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center w-[548px] absolute bottom-[75px] right-[38px]">
							<div className="flex flex-col items-start w-[548px] relative pt-[3px] pb-[3px]">
								<div className="flex flex-col items-start self-stretch relative">
									<div className="items-start self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/o6fmudsg.png')] relative pt-[67px] object-fill">
										<div className="flex flex-col items-start self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/6y4e6tt9.png')] pt-[67px] pb-[172px] object-fill">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ke8v86qe.png"} 
												className="w-[13px] h-[13px] ml-[231px] object-fill"
											/>
										</div>
										<div className="flex flex-col items-center bg-[#0B1739] w-[145px] absolute top-[53px] left-[164px] rounded-[8px] border-[1px] border-solid border-[#0B1739]" 
											style={{
												boxShadow: "3px 4px 17px #01051133"
											}}>
											<div className="flex flex-col items-start w-[111px] mt-[14px] mb-[13px]">
												<div className="flex items-center self-stretch pt-[1px] pb-[1px] mb-[7px] ml-[2px] mr-[2px]">
													<span className="flex-1 text-[#FFFFFF] text-[16px] font-bold" >
														{"$125.2k"}
													</span>
													<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
														<div className="flex items-center pt-[3px] pb-[3px]">
															<span className="text-[#14C973] text-[10px] font-bold mr-[4px]" >
																{"12.5%"}
															</span>
															<img
																src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/l227fkj7.png"} 
																className="w-[8px] h-[8px] object-fill"
															/>
														</div>
													</div>
												</div>
												<span className="text-[#ADB9E1] text-[10px] font-bold" >
													{"June 21, 2023"}
												</span>
											</div>
										</div>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/jo2qeqdv.png"} 
										className="w-[5px] h-[5px] absolute bottom-[151px] right-[-2px] object-fill"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/1lak0evq.png"} 
									className="w-[5px] h-[5px] absolute top-[0px] right-[0px] object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start mt-[1px] mb-[1px]">
						<div className="flex flex-col items-start bg-[#0B1739] relative pt-[25px] pb-[25px] pl-[27px] pr-[27px] border-[1px] border-solid border-[#343A4E]">
							<div className="flex flex-col items-start">
								<div className="flex flex-col items-start relative mb-[32px]">
									<div className="flex flex-col items-start pb-[120px]">
										<div className="flex flex-col items-start relative mb-[4px]">
											<div className="flex flex-col items-center pt-[1px] pb-[1px] pr-[115px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ou3jghc7.png"} 
													className="w-[12px] h-[12px] object-fill"
												/>
											</div>
											<span className="text-[#ADB9E1] text-[12px] font-bold absolute bottom-[0px] right-[1px]" >
												{"Historique Balance"}
											</span>
										</div>
										<div className="flex items-center pt-[7px] pb-[7px]">
											<span className="text-[#FFFFFF] text-[24px] font-bold mr-[9px]" >
												{"$144.6K"}
											</span>
											<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
												<div className="flex items-center pt-[3px] pb-[3px]">
													<span className="text-[#14C973] text-[10px] font-bold mr-[4px]" >
														{"28.5%"}
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/kobh8vlh.png"} 
														className="w-[8px] h-[8px] object-fill"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col w-[312px] absolute bottom-[0px] left-[0px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/tziuz1rq.png"} 
											className="self-stretch h-[75px] mb-[6px] object-fill"
										/>
										<div className="flex items-center self-stretch pt-[3px] pb-[3px] ml-[10px] mr-[10px]">
											<span className="flex-1 text-[#ADB9E1] text-[8px] font-bold" >
												{"12 AM"}
											</span>
											<span className="text-[#ADB9E1] text-[8px] font-bold mr-[74px]" >
												{"8 AM"}
											</span>
											<span className="text-[#ADB9E1] text-[8px] font-bold mr-[73px]" >
												{"4 PM"}
											</span>
											<span className="text-[#ADB9E1] text-[8px] font-bold" >
												{"11 PM"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center pb-[26px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/au5aos15.png"} 
										className="w-[312px] h-[1px] object-fill"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center w-[85px] absolute bottom-[21px] left-[27px]">
								<span className="text-[#ADB9E1] text-[12px] mt-[2px]" >
									{"Depuis 12 mois"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center bg-[#0B1739] pt-[28px] pb-[12px] pl-[24px] pr-[24px] border-[1px] border-solid border-[#0B1739]">
							<div className="flex flex-col items-start">
								<div className="flex flex-col items-start mb-[23px]">
									<div className="flex items-center pt-[1px] pb-[1px] mb-[9px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ovsozs2b.png"} 
											className="w-[12px] h-[12px] mr-[6px] object-fill"
										/>
										<span className="text-[#ADB9E1] text-[12px] font-bold" >
											{"Total des Paiements"}
										</span>
									</div>
									<div className="flex items-start">
										<div className="flex flex-col items-center pt-[7px] pb-[7px] mr-[6px]">
											<span className="text-[#FFFFFF] text-[24px] font-bold" >
												{"400"}
											</span>
										</div>
										<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[4px] pr-[4px] mt-[7px] mb-[7px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
											<div className="flex items-center pt-[3px] pb-[3px]">
												<span className="text-[#14C973] text-[10px] font-bold mr-[3px]" >
													{"16.8%"}
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/uu5y8wno.png"} 
													className="w-[8px] h-[8px] object-fill"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start mb-[24px]">
									<div className="flex flex-col items-start pt-[3px] pb-[3px] mb-[1px]">
										<div className="flex items-start">
											<div className="flex flex-col items-start mb-[18px] mr-[12px]">
												<span className="text-[#ADB9E1] text-[8px] font-bold mb-[18px]" >
													{"500"}
												</span>
												<span className="text-[#ADB9E1] text-[8px] font-bold mb-[18px]" >
													{"250"}
												</span>
												<span className="text-[#ADB9E1] text-[8px] font-bold" >
													{"100"}
												</span>
											</div>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/ivhqoe58.png"} 
												className="w-[295px] h-[72px] mt-[6px] mb-[6px] object-fill"
											/>
										</div>
										<span className="text-[#ADB9E1] text-[8px] font-bold ml-[10px]" >
											{"0"}
										</span>
									</div>
									<div className="flex items-center pt-[3px] pb-[3px] ml-[33px]">
										<span className="text-[#ADB9E1] text-[8px] font-bold mr-[69px]" >
											{"12 AM"}
										</span>
										<span className="text-[#ADB9E1] text-[8px] font-bold mr-[69px]" >
											{"8 AM"}
										</span>
										<span className="text-[#ADB9E1] text-[8px] font-bold mr-[69px]" >
											{"4 PM"}
										</span>
										<span className="text-[#ADB9E1] text-[8px] font-bold" >
											{"11 PM"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/tqpg6kr2.png"} 
										className="w-[320px] h-[1px] mb-[14px] object-fill"
									/>
									<div className="flex items-start ml-[1px]">
										<div className="flex flex-col items-center bg-[#05C16833] pt-[2px] pb-[2px] pl-[6px] pr-[6px] mr-[6px] rounded-[2px] border-[1px] border-solid border-[#05C16833]">
											<div className="flex items-center pt-[6px] pb-[6px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/ZpzoYPcQJj/cz72cobn.png"} 
													className="w-[3px] h-[3px] mr-[5px] object-fill"
												/>
												<span className="text-[#14C973] text-[10px] font-bold" >
													{"Live"}
												</span>
											</div>
										</div>
										<span className="text-[#7E89AC] text-[12px] font-bold mt-[4px] mb-[4px]" >
											{"10k paiements"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
      )
    }
