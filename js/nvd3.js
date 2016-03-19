angular.module('d3App', [ 'nvd3' ]).controller('d3Ctrl', function($scope) {

//	$scope.options = {
//		chart : {
//			type : 'scatterChart',
//			height : 450,
//			margin : {
//				top : 20,
//				right : 20,
//				bottom : 60,
//				left : 55
//			},
//			showValues : true,
//			transitionDuration : 500,
//			xAxis : {
//				axisLabel : 'X Axis'
//			},
//			yAxis : {
//				axisLabel : 'Y Axis',
//				axisLabelDistance : 30
//			},
//			tooltipContent : function(key) {
//				return '<h3>' + key + '</h3>';
//			}
//		}
//	};
	
	$scope.options = getOptions();

//	console.log(JSON.stringify(options));
	
//	$scope.data = randomData(4, 40);
	
	$scope.data = [{"key":"Group 0","values":[{"x":0.10330622161870882,"y":0.20793365176444703,"size":0.21713723632390303,"shape":"circle"},{"x":-1.0515291118697523,"y":0.5268680632861393,"size":0.15527655327486833,"shape":"circle"},{"x":-1.2150964671010303,"y":-0.8642466650823911,"size":0.18688415105770861,"shape":"circle"},{"x":-0.2936832018271312,"y":1.1399687671665855,"size":0.6762285657264486,"shape":"circle"},{"x":0.08642271663819719,"y":-0.4061196251368236,"size":0.9320550022974976,"shape":"circle"},{"x":-0.22207274589427922,"y":0.2909609167682662,"size":0.7340540655587213,"shape":"circle"},{"x":-1.3400911764399,"y":2.817745696661701,"size":0.552379282772435,"shape":"circle"},{"x":0.6859566878377387,"y":0.11188323336491537,"size":0.5971522102098108,"shape":"circle"},{"x":1.3444957189785236,"y":2.117911458560677,"size":0.6464885423144693,"shape":"circle"},{"x":1.2932961846089157,"y":-0.4133644839784766,"size":0.5176984519694088,"shape":"circle"},{"x":0.5498725492824325,"y":0.21435280048439315,"size":0.7220283277979589,"shape":"circle"},{"x":0.08306078517296622,"y":-1.6283450397149193,"size":0.5474119060075637,"shape":"circle"},{"x":0.8961157218094657,"y":0.059660376343048986,"size":0.017533737159582508,"shape":"circle"},{"x":0.6571486524841167,"y":0.6134997167324086,"size":0.010052854460417926,"shape":"circle"},{"x":0.5874910904565583,"y":0.19921220014180785,"size":0.7403424558049221,"shape":"circle"},{"x":0.13968579029616804,"y":-0.48508963710568054,"size":0.9397437220983111,"shape":"circle"},{"x":-0.4454129053418398,"y":0.07070830759007334,"size":0.9664142640892222,"shape":"circle"},{"x":-1.5740960393206604,"y":1.2657889795564996,"size":0.8063585806685047,"shape":"circle"},{"x":-0.29407045812868265,"y":-2.1201909851157428,"size":0.45883777423361205,"shape":"circle"},{"x":0.5928105349382143,"y":-1.5377255780783485,"size":0.5101501033805418,"shape":"circle"},{"x":0.8907543585186146,"y":0.48849403686788007,"size":0.8373935393709822,"shape":"circle"},{"x":0.40506952107719973,"y":1.1911990602148306,"size":0.31169363438434505,"shape":"circle"},{"x":1.1081594426963985,"y":0.6879718104646413,"size":0.3508861744737821,"shape":"circle"},{"x":1.3005115005520302,"y":-0.07295782907423023,"size":0.38250530447893705,"shape":"circle"},{"x":-0.20730155204483483,"y":-0.06907847322517639,"size":0.3417533893416611,"shape":"circle"},{"x":-0.868046835234572,"y":-1.6395797021940826,"size":0.285952330096513,"shape":"circle"},{"x":0.5442703958336449,"y":0.7621787148856493,"size":0.13462328206591123,"shape":"circle"},{"x":0.5668910605682245,"y":-0.0710368054098338,"size":0.7897875610793383,"shape":"circle"},{"x":1.347584772022709,"y":1.2711210187297477,"size":0.7082301256892041,"shape":"circle"},{"x":2.566746456251617,"y":0.7201374830239765,"size":0.2274379323636435,"shape":"circle"},{"x":0.448177769452393,"y":-1.0879422282732552,"size":0.07920209489764596,"shape":"circle"},{"x":-0.868734625003642,"y":-0.839397078620245,"size":0.526551197469167,"shape":"circle"},{"x":-0.8183450281553737,"y":0.33079231248214236,"size":0.9906731221242076,"shape":"circle"},{"x":0.8935037270663552,"y":0.6770615368841204,"size":0.14366586199512077,"shape":"circle"},{"x":-0.40207774130661855,"y":-0.215846808352071,"size":0.8725510227928426,"shape":"circle"},{"x":0.6667270067745071,"y":-0.9681882511897513,"size":0.8263941356905917,"shape":"circle"},{"x":-1.0436181388585684,"y":-0.669957489783861,"size":0.5733464256809946,"shape":"circle"},{"x":1.6581903360006993,"y":-0.2075949066695646,"size":0.7457062563582126,"shape":"circle"},{"x":-0.35613711195781284,"y":-2.1851362433206165,"size":0.48964521594736254,"shape":"circle"},{"x":0.25198958119676634,"y":0.28538794003773726,"size":0.12146411863452777,"shape":"circle"}]},{"key":"Group 1","values":[{"x":0.879273868254847,"y":-0.22946412397382013,"size":0.7037522513596903,"shape":"circle"},{"x":-0.9436832130706864,"y":0.5691370697657997,"size":0.4912816430899889,"shape":"circle"},{"x":-0.7109594820239431,"y":-1.3585336319861274,"size":0.16759546555180815,"shape":"circle"},{"x":0.6591282262448223,"y":-0.16786832089684534,"size":0.24835754647317554,"shape":"circle"},{"x":1.2163472884361293,"y":0.8700022386393884,"size":0.8597256370071196,"shape":"circle"},{"x":-2.291577563369349,"y":-0.8810109939671235,"size":0.5566498570709004,"shape":"circle"},{"x":1.4596162918780797,"y":-0.6707105816532362,"size":0.6601019452804022,"shape":"circle"},{"x":-0.8924834903033467,"y":0.08845370203811553,"size":0.15227582369698456,"shape":"circle"},{"x":-1.0192419282200162,"y":-1.3179548031003214,"size":0.32465317680304784,"shape":"circle"},{"x":0.881838791092383,"y":1.735039933693062,"size":0.33237021515355814,"shape":"circle"},{"x":0.13021847621184984,"y":-0.04715183153495684,"size":0.9344314393134636,"shape":"circle"},{"x":-1.1725543846032482,"y":-0.5935641718241101,"size":0.3286369164657863,"shape":"circle"},{"x":-2.1550729033836302,"y":2.7777919262711603,"size":0.5534457937966151,"shape":"circle"},{"x":0.37194618021232617,"y":0.17424907076373797,"size":0.757561452453555,"shape":"circle"},{"x":-0.208292668591849,"y":0.4188866667859851,"size":0.8411839508174586,"shape":"circle"},{"x":-1.2431439116940817,"y":2.703979218059965,"size":0.23228653781520947,"shape":"circle"},{"x":-0.1913842806072985,"y":0.37370900079536906,"size":0.18980619803678245,"shape":"circle"},{"x":0.2257296182268379,"y":-0.4581886985671487,"size":0.26198418730640105,"shape":"circle"},{"x":1.3507306255168816,"y":-1.1645054710090352,"size":0.6395822749940505,"shape":"circle"},{"x":2.115364456070568,"y":-2.194908573208213,"size":0.0068027585047876205,"shape":"circle"},{"x":-0.9166298581704989,"y":-0.039898088361986016,"size":0.23642099650715398,"shape":"circle"},{"x":-0.8925426487330177,"y":-1.078607640754902,"size":0.015454061213618697,"shape":"circle"},{"x":0.27676914094171756,"y":0.3406551305098269,"size":0.5766794039422014,"shape":"circle"},{"x":-0.3457903795447484,"y":0.4410721187785414,"size":0.5318924932529314,"shape":"circle"},{"x":0.9702460865105323,"y":0.2823594300863189,"size":0.833465309254751,"shape":"circle"},{"x":-0.0638923352628135,"y":-1.0663467624062353,"size":0.9464122602832423,"shape":"circle"},{"x":0.0014740309495179945,"y":0.33683418525391773,"size":0.5045234500539832,"shape":"circle"},{"x":1.895826309865568,"y":-1.9872023438624171,"size":0.21587013895992513,"shape":"circle"},{"x":-0.23621631964094744,"y":-0.060768772006345693,"size":0.17810716483471212,"shape":"circle"},{"x":0.5798648827635539,"y":-0.9187164341654005,"size":0.7069457939626049,"shape":"circle"},{"x":0.7306970189030754,"y":1.7099928208027058,"size":0.8883849314747136,"shape":"circle"},{"x":0.3994328668712664,"y":0.8281234130255005,"size":0.30755309883998505,"shape":"circle"},{"x":-1.0090971201210983,"y":0.2500970946775498,"size":0.0081492707606039,"shape":"circle"},{"x":-0.7911334455174844,"y":1.1995757422705375,"size":0.5027475741664098,"shape":"circle"},{"x":0.34852347399130273,"y":-1.2030208505370046,"size":0.4836359688998191,"shape":"circle"},{"x":1.1702744259599245,"y":-0.17117847738431372,"size":0.07855444097042463,"shape":"circle"},{"x":-0.1846373207319475,"y":0.6039971862829981,"size":0.8003952820262443,"shape":"circle"},{"x":-0.643643886761683,"y":0.8719116783558737,"size":0.27798001136251305,"shape":"circle"},{"x":0.4952687398094381,"y":0.11661196842325777,"size":0.0196106110767984,"shape":"circle"},{"x":1.7344574221118103,"y":0.731327531581235,"size":0.7763658174232988,"shape":"circle"}]},{"key":"Group 2","values":[{"x":-0.639723023171846,"y":0.3938662438748171,"size":0.18809809076337558,"shape":"circle"},{"x":-0.17864217164349058,"y":-0.9361676411737182,"size":0.6606834389779213,"shape":"circle"},{"x":-1.258654684246255,"y":-0.5597779639931414,"size":0.6461904990699205,"shape":"circle"},{"x":-0.9116667582116738,"y":0.2587785853661082,"size":0.6325023516988282,"shape":"circle"},{"x":0.5203257542507955,"y":0.04927526965006752,"size":0.9398029070984533,"shape":"circle"},{"x":0.5531339690916746,"y":-2.210153562671972,"size":0.7714394950949501,"shape":"circle"},{"x":1.226117592204669,"y":-2.1397965842731965,"size":0.8209034466024867,"shape":"circle"},{"x":0.11990522127434719,"y":0.9834634772646131,"size":0.8146666271550613,"shape":"circle"},{"x":1.654524048662155,"y":0.20653300874873864,"size":0.38993330343051835,"shape":"circle"},{"x":-1.8309565226402642,"y":-1.4230397232886471,"size":0.17850998915456673,"shape":"circle"},{"x":0.7205936950768951,"y":-0.8366876217044693,"size":0.011770488360951958,"shape":"circle"},{"x":-2.029348656902357,"y":-0.6888692694584948,"size":0.5402437498867587,"shape":"circle"},{"x":-1.1420079669716352,"y":-0.4973954670549004,"size":0.8084059485474953,"shape":"circle"},{"x":0.10279996398653936,"y":1.0106423229771768,"size":0.2111228584030529,"shape":"circle"},{"x":-0.782918638152449,"y":1.3620222101888302,"size":0.7262448161931254,"shape":"circle"},{"x":-0.09274753800161917,"y":1.1275640430924043,"size":0.11028661766276704,"shape":"circle"},{"x":-1.0397297007351296,"y":1.2079461485343903,"size":0.8469419788897137,"shape":"circle"},{"x":-0.1590434871508615,"y":-0.5672072270885372,"size":0.7677887798645731,"shape":"circle"},{"x":-1.055079527246683,"y":1.1530221539304417,"size":0.4777971736725799,"shape":"circle"},{"x":0.5964968840080473,"y":1.6289069460373653,"size":0.028305514856767466,"shape":"circle"},{"x":1.5810783751499735,"y":0.5665966866942546,"size":0.38567682522296987,"shape":"circle"},{"x":-1.0639035166191684,"y":0.43500455706641,"size":0.7585428533755663,"shape":"circle"},{"x":-0.32336787085439145,"y":-0.17432591556752047,"size":0.13980695919591324,"shape":"circle"},{"x":1.3092802793874931,"y":-0.9205497829088812,"size":0.3728042575291868,"shape":"circle"},{"x":-1.5151167667109449,"y":0.8438660539175871,"size":0.4092243699939997,"shape":"circle"},{"x":-0.5333086076700094,"y":-1.4673518397999141,"size":0.3575967174455301,"shape":"circle"},{"x":-0.7168276285361526,"y":-0.12292601317741941,"size":0.27418462973215796,"shape":"circle"},{"x":0.9856691717386875,"y":0.36509025170044446,"size":0.389105372423564,"shape":"circle"},{"x":-1.2747590374632733,"y":1.4251329543206805,"size":0.11650128885039379,"shape":"circle"},{"x":-0.8811467099623402,"y":-1.3239928028512622,"size":0.5200419183757123,"shape":"circle"},{"x":0.8866172567852325,"y":-0.13851638143931758,"size":0.6124585772310966,"shape":"circle"},{"x":-0.24639335801945553,"y":2.4683649486558177,"size":0.20403596935200397,"shape":"circle"},{"x":-0.15646761873166712,"y":-0.3672207440959928,"size":0.5540409029690903,"shape":"circle"},{"x":-0.951758231194476,"y":-0.2142154946997858,"size":0.2039987313914844,"shape":"circle"},{"x":-1.0906507807890091,"y":0.40463401170275026,"size":0.9491496922721687,"shape":"circle"},{"x":1.174447897927428,"y":-1.4731449699012666,"size":0.5796094942243109,"shape":"square"},{"x":-0.8748130638454928,"y":0.5873506666283912,"size":0.9204183405024828,"shape":"circle"},{"x":0.5190034032585777,"y":0.15169070751941607,"size":0.6303650128632254,"shape":"circle"},{"x":-0.39853596291925786,"y":1.5554808949530319,"size":0.20297062720297676,"shape":"circle"},{"x":0.6511426572040221,"y":0.38320667897654753,"size":0.11467117996251197,"shape":"circle"}]},{"key":"Group 3","values":[{"x":0.2863606664498774,"y":-0.5258771670134756,"size":0.2464482337597793,"shape":"circle"},{"x":0.4070678013559303,"y":-0.7892207116233403,"size":0.45762126195592434,"shape":"circle"},{"x":0.0464110421771623,"y":-1.434419234761621,"size":0.3471898734529575,"shape":"circle"},{"x":1.0410686626799652,"y":-0.18948638292039052,"size":0.8532021561211078,"shape":"circle"},{"x":0.5440652235190744,"y":0.37217567759992715,"size":0.33268574238673976,"shape":"circle"},{"x":0.3795671505294365,"y":0.6002668100721051,"size":0.22624924780394817,"shape":"circle"},{"x":0.27085528674814335,"y":1.325654364127573,"size":0.07797950852392987,"shape":"circle"},{"x":-0.46428282424623746,"y":-0.41579454692582224,"size":0.38156612920963795,"shape":"cross"},{"x":0.30226717373207906,"y":0.12581599582543934,"size":0.840607966253546,"shape":"circle"},{"x":-1.5660652953628131,"y":-0.503882773706495,"size":0.6669774447422223,"shape":"circle"},{"x":0.23587397832263327,"y":1.8289538161672239,"size":0.8307738373214402,"shape":"diamond"},{"x":-1.5887362639453777,"y":0.18339103108857618,"size":0.49548708943303454,"shape":"circle"},{"x":-0.8575886845021246,"y":0.7737852720061248,"size":0.4520824495316962,"shape":"circle"},{"x":-2.0859523156940756,"y":0.14736338881782005,"size":0.31128061998080203,"shape":"cross"},{"x":0.2909933113433898,"y":-0.5445078688059077,"size":0.04941408200220598,"shape":"circle"},{"x":0.949871441525481,"y":-0.34676134593636965,"size":0.9269463631162149,"shape":"circle"},{"x":-0.019768515716608762,"y":1.357882119740295,"size":0.30595868591931596,"shape":"circle"},{"x":-0.17251107779845376,"y":-0.3230229392681279,"size":0.7133699185933351,"shape":"circle"},{"x":-1.151871068194642,"y":-0.485326959042735,"size":0.7862178412648895,"shape":"circle"},{"x":-3.1772964982828533,"y":-1.0362805359433944,"size":0.6009506080251115,"shape":"circle"},{"x":0.5691415786739031,"y":-0.452320116814352,"size":0.04718553967393313,"shape":"circle"},{"x":0.09748758915106628,"y":-0.7862348240455203,"size":0.8080779580394697,"shape":"circle"},{"x":-0.886098182297064,"y":-0.3117086661555094,"size":0.1647965460320755,"shape":"circle"},{"x":-0.03149837421995242,"y":-0.8951923435177085,"size":0.7988952210463593,"shape":"circle"},{"x":-0.8500587686731167,"y":-1.5375205804683314,"size":0.5961007260675804,"shape":"circle"},{"x":0.4244695411949799,"y":0.40255458093508745,"size":0.014239309428648372,"shape":"circle"},{"x":0.9140437523488761,"y":-0.7612554552481349,"size":0.5210325241263043,"shape":"circle"},{"x":-1.243486098959387,"y":-0.7885599040039205,"size":0.5360851484799851,"shape":"circle"},{"x":0.2877433660730868,"y":-1.19125170368542,"size":0.04557327080313889,"shape":"circle"},{"x":0.4416913803707879,"y":-0.4304427265593808,"size":0.8554289820176519,"shape":"circle"},{"x":-0.8883859026172632,"y":0.27822281598922105,"size":0.5801651477338337,"shape":"circle"},{"x":1.82863371020481,"y":0.1558278344938267,"size":0.15158974436070194,"shape":"circle"},{"x":-0.5460476318910252,"y":-0.20717078965065247,"size":0.6631196679548641,"shape":"circle"},{"x":-0.7022162009378751,"y":-2.1125773059771715,"size":0.2701826021021583,"shape":"circle"},{"x":-0.43294747927200805,"y":0.8335892838250072,"size":0.32962252317486884,"shape":"circle"},{"x":-0.8190968698825151,"y":0.32342689205608777,"size":0.13301235655882926,"shape":"circle"},{"x":-0.16684148127273185,"y":0.1773484471883765,"size":0.3150717482354157,"shape":"circle"},{"x":-0.5371580303055794,"y":1.2250200898618337,"size":0.921166349770854,"shape":"circle"},{"x":0.45202743095783376,"y":-0.5568621869932463,"size":0.01691830770309255,"shape":"circle"},{"x":0.5569099837427371,"y":1.336799858708762,"size":0.20872187284772692,"shape":"circle"}]}];
	

	// $scope.options = {
	// chart: {
	// type: 'discreteBarChart',
	// height: 450,
	// margin : {
	// top: 20,
	// right: 20,
	// bottom: 60,
	// left: 55
	// },
	// x: function(d){ return d.label; },
	// y: function(d){ return d.value; },
	// showValues: true,
	// valueFormat: function(d){
	// return d3.format(',.4f')(d);
	// },
	// transitionDuration: 500,
	// xAxis: {
	// axisLabel: 'X Axis'
	// },
	// yAxis: {
	// axisLabel: 'Y Axis',
	// axisLabelDistance: 30
	// }
	// }
	// };
	//
	// $scope.data = [{
	// key: "Cumulative Return",
	// values: [
	// { "label" : "A" , "value" : -29.765957771107 },
	// { "label" : "B" , "value" : 0 },
	// { "label" : "C" , "value" : 32.807804682612 },
	// { "label" : "D" , "value" : 196.45946739256 },
	// { "label" : "E" , "value" : 0.19434030906893 },
	// { "label" : "F" , "value" : -98.079782601442 },
	// { "label" : "G" , "value" : -13.925743130903 },
	// { "label" : "H" , "value" : -5.1387322875705 }
	// ]
	// }];
})


function getOptions(){
	var data = {
			chart : {
				type : 'scatterChart',
				height : 450,
				margin : {
					top : 20,
					right : 20,
					bottom : 60,
					left : 55
				},
				showValues : true,
				transitionDuration : 500,
				xAxis : {
					axisLabel : 'X Axis'
				},
				yAxis : {
					axisLabel : 'Y Axis',
					axisLabelDistance : 30
				},
				tooltipContent : function(key) {
					return '<h3>' + key + '</h3>';
				}
			}
		};
	
	console.log(JSON.stringify(data));
	
	return data;
}

/*******************************************************************************
 * Simple test data generator
 */
function randomData(groups, points) { // # groups,# points per group
	var data = [], shapes = [ 'circle', 'cross', 'triangle-up',
			'triangle-down', 'diamond', 'square' ], random = d3.random.normal();

	for (i = 0; i < groups; i++) {
		data.push({
			key : 'Group ' + i,
			values : []
		});

		for (j = 0; j < points; j++) {
			data[i].values.push({
				x : random(),
				y : random(),
				size : Math.random(),
				shape : (Math.random() > 0.95) ? shapes[j % 6] : "circle"
			});
		}
	}

//	print(data)
//	console.log(data);
//	console.log(JSON.stringify(data));
	
	return data;
}