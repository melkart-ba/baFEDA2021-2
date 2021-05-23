$(document).ready(function(){
	//palets iniciales de Europa, nombre, filas, unidadesxfilas, total unidades, altura caja, resistencia
	//IMPORTANTE. Si varían los productos, tanto en cantidad como en dimensiones, aqui es donde hay que hacer los cambios
	var po1 = ["aceite", 5, 11, 55, 28.5, 1];
	var po2 = ["alubias", 7, 12, 84, 17.5, 1];
	var po3 = ["arroz p", 8, 10, 80, 16.5, 7];
	var po4 = ["arroz c", 7, 10, 70, 18, 4];
	var po5 = ["batidos", 10, 14, 140, 12, 3];
	var po6 = ["batidos g", 8, 12, 96, 12, 3];
	var po7 = ["atún", 7, 12, 84, 21, 1];
	var po8 = ["magro", 20, 12, 240, 6.5, 4];
	var po9 = ["sardinas", 9, 10, 90, 15.5, 2];
	var po10 = ["almíbar", 12, 6, 72, 13, 2];
	var po11 = ["galletas", 7, 9, 63, 31, 5];
	var po12 = ["leche", 6, 20, 120, 17, 3];
	var po13 = ["macedonia", 7, 10, 70, 17.5, 1];
	var po14 = ["macarrón", 6, 10, 60, 34, 6];
	var po15 = ["potitos f", 8, 18, 144, 12.5, 6];
	var po16 = ["potitos p", 8, 18, 144, 12.5, 6];
	var po17 = ["tomate", 7, 12, 84, 14, 3];
	//la altura de un palet vacío
	var alt_base = 15;
	//para poner entregado en palets completos
	var entregado = '<div class="paentregado"><div class="entregado"><p>ENTREGADO</p><div class="cuadrado"></div></div></div>';
	//para poner hecho y verificado
	var hecho = '<div class="pacheques"><div class="cheque1"><p>HECHO</p><div class="cuadrado"></div></div><div class="cheque2"><p>VERIFICADO</p><div class="cuadrado"></div></div></div>';
	console.log("po1 ",po1);
	var total_palets;
	$('#calc_palets').on('click', function(){
		var p1=po1.slice(0);
		var p2=po2.slice(0);
		var p3=po3.slice(0);
		var p4=po4.slice(0);
		var p5=po5.slice(0);
		var p6=po6.slice(0);
		var p7=po7.slice(0);
		var p8=po8.slice(0);
		var p9=po9.slice(0);
		var p10=po10.slice(0);
		var p11=po11.slice(0);
		var p12=po12.slice(0);
		var p13=po13.slice(0);
		var p14=po14.slice(0);
		var p15=po15.slice(0);
		var p16=po16.slice(0);
		var p17=po17.slice(0);
		console.log("p1 ",p1);
		//borrar cálculos anteriores en caso de "calcular" clickado 2 veces o más
		total_palets = 0;
		$('.palets_iniciales').remove();
		$('.bloquelistado div').remove();
		$('#nocombi *').remove();
		$('.total_palets div').remove();
		$('.incompletos').remove();
		//++ SE AÑADEN al array PALETS COMP, UNID QUE QUEDAN, FILAS SUELTAS AL ALZA, ALTURA FILAS SUELTAS, unidades asignadas, filas del palet original y cajas del palet original
		anadir_calculos(p1, '#unidadesp1');
		anadir_calculos(p2, '#unidadesp2');
		anadir_calculos(p3, '#unidadesp3');
		anadir_calculos(p4, '#unidadesp4');
		anadir_calculos(p5, '#unidadesp5');
		anadir_calculos(p6, '#unidadesp6');
		anadir_calculos(p7, '#unidadesp7');
		anadir_calculos(p8, '#unidadesp8');
		anadir_calculos(p9, '#unidadesp9');
		anadir_calculos(p10, '#unidadesp10');
		anadir_calculos(p11, '#unidadesp11');
		anadir_calculos(p12, '#unidadesp12');
		anadir_calculos(p13, '#unidadesp13');
		anadir_calculos(p14, '#unidadesp14');
		anadir_calculos(p15, '#unidadesp15');
		anadir_calculos(p16, '#unidadesp16');
		anadir_calculos(p17, '#unidadesp17');
		console.log("po1 despues ",po1);
		console.log("p1 despues ",p1);
	//++++++++++++ PONE LOS PALETS COMPLETOS EN HTML ++++++++++
		palets_completos(p1);
		palets_completos(p2);
		palets_completos(p3);
		palets_completos(p4);
		palets_completos(p5);
		palets_completos(p6);
		palets_completos(p7);
		palets_completos(p8);
		palets_completos(p9);
		palets_completos(p10);
		palets_completos(p11);
		palets_completos(p12);
		palets_completos(p13);
		palets_completos(p14);
		palets_completos(p15);
		palets_completos(p16);
		palets_completos(p17);
		//+++++++++++++++  PALETS INCOMPLETOS SABER SI CABEN EN ESTANTERIAS (excepciones) +++++++++++++++
		//---------- los condicionales dependen las alturas de cada producto
		//aceite
		if(p1[9]>=114){
			$('#palets_incompletos').append("<div class='incompletos'><div><p><span class='palet_prod'>"+p1[0]+"</span>. "+p1[7]+" unidades. SI cabe en la estantería.</p></div>"+hecho+"</div");
			p1[6]=0;
			p1[7]=0;
			p1[9]=0;
			++total_palets;
		}
		//atun
		if(p7[9]>=126){
			$('#palets_incompletos').append("<div class='incompletos'><div><p><span class='palet_prod'>"+p7[0]+"</span>. "+p7[7]+" unidades. SI cabe en la estantería.</p></div>"+hecho+"</div");
			p7[6]=0;
			p7[7]=0;
			p7[9]=0;
			++total_palets;
		}
		//almibar
		if(p10[9]>=143){
			$('#palets_incompletos').append("<div class='incompletos'><div><p><span class='palet_prod'>"+p10[0]+"</span>. "+p10[7]+" unidades. SI cabe en la estantería.</p></div>"+hecho+"</div");
			p10[6]=0;
			p10[7]=0;
			p10[9]=0;
			++total_palets;
		}
		//galletas
		if(p11[9]>155){
			$('#palets_incompletos').append("<div class='incompletos'><div><p><span class='palet_prod'>"+p11[0]+"</span>. "+p11[7]+" unidades. NO cabe en la estantería.</p></div>"+hecho+"</div");
			p11[6]=0;
			p11[7]=0;
			p11[9]=0;
			++total_palets;
		}
		//macarrón
		if(p14[9]>136){
		//if((p14[9]+alt_base)>170){
			$('#palets_incompletos').append("<div class='incompletos'><div><p><span class='palet_prod'>"+p14[0]+"</span>. "+p14[7]+" unidades. NO cabe en la estantería.</p></div>"+hecho+"</div");
			p14[6]=0;
			p14[7]=0;
			p14[9]=0;
			++total_palets;
		}
		//se crea EL SUPER array de productos
		var todos_prod = [];
		todos_prod.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17);
		//+++++++++++++++++++++++ BARRIDO 2X2 ++++++++++++++++++++
		for(var i=0;i<todos_prod.length;i++){
			var combi2x2 = 0; var mayor_combi = 0; var prod2 = 0;
			if(todos_prod[i][7]!=0){
				var alt_p1=todos_prod[i][9];
				for(var j=i+1;j<todos_prod.length;j++){
					if(todos_prod[j][7]!=0){
						var alt_p2 = todos_prod[j][9];
						combi2x2 = alt_p1 + alt_p2 + alt_base;
						if(combi2x2>=140 && combi2x2<=170){
							if(combi2x2>mayor_combi){
								mayor_combi = combi2x2;
								prod2 = j;
							}
						}
					}
				}
			}
			if(mayor_combi!=0){
				$(".bloquelistado").append("<div><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+todos_prod[i][11]+" filas del palet original y "+todos_prod[i][12]+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod2][5]+" - "+todos_prod[prod2][0]+"</span>. "+todos_prod[prod2][7]+" Unidades. "+todos_prod[prod2][11]+" filas del palet original y "+todos_prod[prod2][12]+" cajas del palet original.</p>"+"<p><span class='altura'>Altura total: "+mayor_combi+"</span></p></div>"+hecho+"</div>");
				todos_prod[i][7]=0;
				todos_prod[prod2][7]=0;
				++total_palets;
			}
		}//fin barrido 2x2
		//+++++++++++ COMBINACIONES DE 3X3 +++++++++++
		for(i=0;i<todos_prod.length;i++){
			var combi3x3 = 0; mayor_combi = 0; prod2 = 0; var prod3 = 0;
			alt_p1=0;alt_p2=0;
			if(todos_prod[i][7]!=0){
				alt_p1=todos_prod[i][9];
				for(j=i+1;j<todos_prod.length;j++){
					if(todos_prod[j][7]!=0){
						alt_p2 = todos_prod[j][9];
					}
					for(var k=j+1;k<todos_prod.length;k++){
						if(todos_prod[k][7]!=0){
							var alt_p3 = todos_prod[k][9];
							combi3x3 = alt_p1 + alt_p2 + alt_p3 + alt_base;
							if(combi3x3>=140 && combi3x3<=170){
								if(combi3x3>mayor_combi){
									mayor_combi=combi3x3;
									prod2=j;
									prod3=k;
								}
							}
						}
					}
				}
			}
			if(mayor_combi!=0){
				var filas3x3_1 = todos_prod[i][11];
				var cajas3x3_1 = todos_prod[i][12];
				var filas3x3_2 = todos_prod[prod2][11];
				var cajas3x3_2 = todos_prod[prod2][12];
				var filas3x3_3 = todos_prod[prod3][11];
				var cajas3x3_3 = todos_prod[prod3][12];
				$(".bloquelistado").append("<div><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+filas3x3_1+" filas del palet original y "+cajas3x3_1+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod2][5]+" - "+todos_prod[prod2][0]+"</span>. "+todos_prod[prod2][7]+" Unidades. "+filas3x3_2+" filas del palet original y "+cajas3x3_2+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod3][5]+" - "+todos_prod[prod3][0]+"</span>. "+todos_prod[prod3][7]+" Unidades. "+filas3x3_3+" filas del palet original y "+cajas3x3_3+" cajas del palet original."+"</p><p><span class='altura'>Altura total: "+mayor_combi+"</span></p></div>"+hecho+"</div>");
				todos_prod[i][7]=0;
				todos_prod[prod2][7]=0;
				todos_prod[prod3][7]=0;
				++total_palets;
			}
		}//fin del barrido 3x3
		//+++++++++++ COMBINACIONES DE 4X4 +++++++++++
		for(i=0;i<todos_prod.length;i++){
			var combi4x4 = 0; mayor_combi = 0; prod2 = 0; prod3 = 0; var prod4 = 0;
			alt_p1=0; alt_p2=0; alt_p3=0; var alt_p4 = 0;
			if(todos_prod[i][7]!=0){
				alt_p1=todos_prod[i][9];
				for(j=i+1;j<todos_prod.length;j++){
					if(todos_prod[j][7]!=0){
						alt_p2 = todos_prod[j][9];
					}
					for(k=j+1;k<todos_prod.length;k++){
						if(todos_prod[k][7]!=0){
							alt_p3 = todos_prod[k][9];
							for(var l=k+1;l<todos_prod.length;l++){
								if(todos_prod[l][7]!=0){
									alt_p4 = todos_prod[l][9];
										combi4x4 = alt_p1 + alt_p2 + alt_p3 + alt_p4 + alt_base;
										if(combi4x4>=140 && combi4x4<=170){
											if(combi4x4>mayor_combi){
												mayor_combi=combi4x4;
												prod2=j;
												prod3=k;
												prod4=l;
											}
										}
								}
							}
						}
					}
				}
			}
			if(mayor_combi!=0){
				var filas_palet1 = todos_prod[i][11];
				var cajas1 = todos_prod[i][12];
				var filas_palet2 = todos_prod[prod2][11];
				var cajas2 = todos_prod[prod2][12];
				var filas_palet3 = todos_prod[prod3][11];
				var cajas3 = todos_prod[prod3][12];
				var filas_palet4 = todos_prod[prod4][11];
				var cajas4 = todos_prod[prod4][12];
				$(".bloquelistado").append("<div><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+filas_palet1+" filas del palet original y "+cajas1+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod2][5]+" - "+todos_prod[prod2][0]+"</span>. "+todos_prod[prod2][7]+" Unidades. "+filas_palet2+" filas del palet original y "+cajas2+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod3][5]+" - "+todos_prod[prod3][0]+"</span>. "+todos_prod[prod3][7]+" Unidades. "+filas_palet3+" filas del palet original y "+cajas3+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod4][5]+" - "+todos_prod[prod4][0]+"</span>. "+todos_prod[prod4][7]+" Unidades. "+filas_palet4+" filas del palet original y "+cajas4+" cajas del palet original."+"</p><p><span class='altura'>Altura total: "+mayor_combi+"</span></p></div>"+hecho+"</div>");
				todos_prod[i][7]=0;
				todos_prod[prod2][7]=0;
				todos_prod[prod3][7]=0;
				todos_prod[prod4][7]=0;
				++total_palets;
			}
		}//fin del barrido 4x4
		//+++++++++++ COMBINACIONES DE 5X5 +++++++++++
		for(i=0;i<todos_prod.length;i++){
			var combi5x5 = 0; mayor_combi = 0; prod2 = 0; prod3 = 0; prod4 = 0; var prod5 = 0;
			alt_p1=0; alt_p2=0; alt_p3=0; alt_p4=0; var alt_p5 = 0;
			if(todos_prod[i][7]!=0){
				alt_p1=todos_prod[i][9];
				for(j=i+1;j<todos_prod.length;j++){
					if(todos_prod[j][7]!=0){
						alt_p2 = todos_prod[j][9];
					}
					for(k=j+1;k<todos_prod.length;k++){
						if(todos_prod[k][7]!=0){
							alt_p3 = todos_prod[k][9];
							for(l=k+1;l<todos_prod.length;l++){
								if(todos_prod[l][7]!=0){
									alt_p4 = todos_prod[l][9];
									for(var m=l+1;m<todos_prod.length;m++){
										if(todos_prod[m][7]!=0){
											alt_p5 = todos_prod[m][9];
											combi5x5 = alt_p1 + alt_p2 + alt_p3 + alt_p4 + alt_p5 + alt_base;
											if(combi5x5>=140 && combi5x5<=170){
												if(combi5x5>mayor_combi){
													mayor_combi=combi5x5;
													prod2=j;
													prod3=k;
													prod4=l;
													prod5=m;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			if(mayor_combi!=0){
				var filas5x5_1 = todos_prod[i][11];
				var cajas5x5_1 = todos_prod[i][12];
				var filas5x5_2 = todos_prod[prod2][11];
				var cajas5x5_2 = todos_prod[prod2][12];
				var filas5x5_3 = todos_prod[prod3][11];
				var cajas5x5_3 = todos_prod[prod3][12];
				var filas5x5_4 = todos_prod[prod4][11];
				var cajas5x5_4 = todos_prod[prod4][12];
				var filas5x5_5 = todos_prod[prod5][11];
				var cajas5x5_5 = todos_prod[prod5][12];
				$(".bloquelistado").append("<div><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+filas5x5_1+" filas del palet original y "+cajas5x5_1+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod2][5]+" - "+todos_prod[prod2][0]+"</span>. "+todos_prod[prod2][7]+" Unidades. "+filas5x5_2+" filas del palet original y "+cajas5x5_2+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod3][5]+" - "+todos_prod[prod3][0]+"</span>. "+todos_prod[prod3][7]+" Unidades. "+filas5x5_3+" filas del palet original y "+cajas5x5_3+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod4][5]+" - "+todos_prod[prod4][0]+"</span>. "+todos_prod[prod4][7]+" Unidades. "+filas5x5_4+" filas del palet original y "+cajas5x5_4+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod5][5]+" - "+todos_prod[prod5][0]+"</span>. "+todos_prod[prod5][7]+" Unidades. "+filas5x5_5+" filas del palet original y "+cajas5x5_5+" cajas del palet original."+"</p><p><span class='altura'>Altura total: "+mayor_combi+"</span></p></div>"+hecho+"</div>");
				todos_prod[i][7]=0;
				todos_prod[prod2][7]=0;
				todos_prod[prod3][7]=0;
				todos_prod[prod4][7]=0;
				todos_prod[prod5][7]=0;
				++total_palets;
			}
		}//fin del barrido 5x5
		//+++++++++++ COMBINACIONES DE 6X6 +++++++++++
		for(i=0;i<todos_prod.length;i++){
			var combi6x6 = 0; mayor_combi = 0; prod2 = 0; prod3 = 0; prod4 = 0; prod5 = 0; var prod6 = 0;
			alt_p1=0; alt_p2=0; alt_p3=0; alt_p4=0; alt_p5 = 0; var alt_p6 = 0;
			if(todos_prod[i][7]!=0){
				alt_p1=todos_prod[i][9];
				for(j=i+1;j<todos_prod.length;j++){
					if(todos_prod[j][7]!=0){
						alt_p2 = todos_prod[j][9];
					}
					for(k=j+1;k<todos_prod.length;k++){
						if(todos_prod[k][7]!=0){
							alt_p3 = todos_prod[k][9];
							for(l=k+1;l<todos_prod.length;l++){
								if(todos_prod[l][7]!=0){
									alt_p4 = todos_prod[l][9];
									for(m=l+1;m<todos_prod.length;m++){
										if(todos_prod[m][7]!=0){
											alt_p5 = todos_prod[m][9];
											for(var n=m+1;n<todos_prod.length;n++){
												if(todos_prod[n][7]!=0){
													alt_p6 = todos_prod[n][9];
													combi6x6 = alt_p1 + alt_p2 + alt_p3 + alt_p4 + alt_p5 + alt_p6 + alt_base;
													if(combi6x6>=140 && combi6x6<=170){
														if(combi6x6>mayor_combi){
															mayor_combi=combi6x6;
															prod2=j;
															prod3=k;
															prod4=l;
															prod5=m;
															prod6=n;
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			if(mayor_combi!=0){
				var filas6x6_1 = todos_prod[i][11];
				var cajas6x6_1 = todos_prod[i][12];
				var filas6x6_2 = todos_prod[prod2][11];
				var cajas6x6_2 = todos_prod[prod2][12];
				var filas6x6_3 = todos_prod[prod3][11];
				var cajas6x6_3 = todos_prod[prod3][12];
				var filas6x6_4 = todos_prod[prod4][11];
				var cajas6x6_4 = todos_prod[prod4][12];
				var filas6x6_5 = todos_prod[prod5][11];
				var cajas6x6_5 = todos_prod[prod5][12];
				var filas6x6_6 = todos_prod[prod6][11];
				var cajas6x6_6 = todos_prod[prod6][12];
				$(".bloquelistado").append("<div><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+filas6x6_1+" filas del palet original y "+cajas6x6_1+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod2][5]+" - "+todos_prod[prod2][0]+"</span>. "+todos_prod[prod2][7]+" Unidades. "+filas6x6_2+" filas del palet original y "+cajas6x6_2+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod3][5]+" - "+todos_prod[prod3][0]+"</span>. "+todos_prod[prod3][7]+" Unidades. "+filas6x6_3+" filas del palet original y "+cajas6x6_3+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod4][5]+" - "+todos_prod[prod4][0]+"</span>. "+todos_prod[prod4][7]+" Unidades. "+filas6x6_4+" filas del palet original y "+cajas6x6_4+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod5][5]+" - "+todos_prod[prod5][0]+"</span>. "+todos_prod[prod5][7]+" Unidades. "+filas6x6_5+" filas del palet original y "+cajas6x6_5+" cajas del palet original.</p>"+"<p><span>"+todos_prod[prod6][5]+" - "+todos_prod[prod6][0]+"</span>. "+todos_prod[prod6][7]+" Unidades. "+filas6x6_6+" filas del palet original y "+cajas6x6_6+" cajas del palet original."+"</p><p><span class='altura'>Altura total: "+mayor_combi+"</span></p></div>"+hecho+"</div>");
				todos_prod[i][7]=0;
				todos_prod[prod2][7]=0;
				todos_prod[prod3][7]=0;
				todos_prod[prod4][7]=0;
				todos_prod[prod5][7]=0;
				todos_prod[prod6][7]=0;
				++total_palets;
			}
		}//fin del barrido 6x6
		//pone los productos sobrantes
		var fila_sobra = 0; var caja_sobra = 0; var altura_sobrantes = 0; var palets_sobrantes = 0;
		for(i=0;i<todos_prod.length;i++){
			if(todos_prod[i][7]!=0){
				fila_sobra = todos_prod[i][11];
				caja_sobra = todos_prod[i][12];
				$('#nocombi').append("<div class='sobras'><div><p><span>"+todos_prod[i][5]+" - "+todos_prod[i][0]+"</span>. "+todos_prod[i][7]+" Unidades. "+fila_sobra+" filas del palet original y "+caja_sobra+" cajas del palet original. Altura: "+todos_prod[i][9]+".</p></div>"+hecho+"</div>");
				altura_sobrantes = altura_sobrantes + todos_prod[i][9];
				todos_prod[i][7]=0;
			}
		}
		if(altura_sobrantes!=0){
			var con_palet = altura_sobrantes+alt_base;
			$('#nocombi').append("<p><span class='altura'>ALTURA TOTAL: </span>"+altura_sobrantes+"</p>");
			$('#nocombi').append("<p><span class='altura'>ALTURA TOTAL con palet: </span>"+con_palet+"</p>");
			if(altura_sobrantes < 155){
				++total_palets;
			}else{
				palets_sobrantes = Math.ceil(altura_sobrantes/155);
				total_palets = total_palets + palets_sobrantes;
			}
		}
		$('.total_palets').append("<div><h3>TOTAL PALETS: "+total_palets+"</h3></div>");
	});
	
function anadir_calculos(rp1, id_prod){//anadir es añadir
	//coge las unidades del input
	console.log("inicio rp1 ",rp1);
	var unidades = parseFloat($(id_prod).val());
	//añade los posibles palets completos
	var palets = parseInt(unidades/rp1[3]);
	rp1.push(palets);
	//añade las cajas sueltas
	var sueltas = unidades%rp1[3];
	rp1.push(sueltas);
	//añade las filas al alza
	var filas = Math.ceil(sueltas/rp1[2]);
	rp1.push(filas);
	//añade la alturas de las cajas al alza
	var alt_sueltas = filas*rp1[4];
	rp1.push(alt_sueltas);
	//añade las unidades otorgadas, posición 10
	rp1.push(unidades);
	//pone las filas no al alza, posición 11
	rp1.push(parseInt(sueltas/rp1[2]));
	//pone las cajas fuera de fila, posicion 12
	rp1.push(unidades%rp1[2]);
	console.log("salida rp1 ",rp1);
}
function palets_completos(rp1){
	var palets = rp1[6];
	if(palets!=0){
		$('#palets_iniciales').append("<div class='palets_iniciales'><p><span class='palet_prod'>"+rp1[0]+"</span>: "+palets+"</p>"+entregado+"</div>");
		++total_palets;
		rp1[6]=0;
	}
}
});

