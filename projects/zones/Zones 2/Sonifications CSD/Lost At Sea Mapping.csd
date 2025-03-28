<CsoundSynthesizer>
<CsOptions>
; Select audio/midi flags here according to platform
-odac      ;;;realtime audio out
;-iadc    ;;;uncomment -iadc if realtime audio input is needed too
; For Non-realtime ouput leave only the line below:
; -o fog.wav -W ;;; for file output any platform
</CsOptions>
<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs  = 1

;DATA-SET INPUT	 FOR INSTRUMENT 1
/********************************************************************************************************************************/

;DATA					    ;Syrian Emiration Rate Statistics for Migrnts Lost at Sea from  01/10/2015 to 24/08/2016

   giSRIAEMI ftgen 0, 0, -345, -2, 28214,27966,37849,32559,39664,40180,38206,38573,43671,37018,42788,47708,37659,38475,36894,45403,38980,43465,38117,48626,59914,52433,52441,55672,57774,46002,45319,49469,51347,52754,53205,52744,47409,35572,41912,29756,36753,38754,42613,51861,51265,52233,50933,44089,42619,47988,40224,37295,38721,30887,36742,27970,31677,19809,26868,19839,18576,17797,19523,21950,25113,19545,23398,16329,19056,18515,29613,31186,25764,25946,21404,21310,24985,20153,25867,19940,21686,21879,18842,19764,25353,19403,18715,19121,23087,23762,24550,23591,24791,27118,20186,10130,15659,20400,19972,15744,16045,16102,11721,13362,14520,10946,11042,9165,13166,16235,18956,12404,12732,9780,11253,8428,11217,15342,10825,11926,12949,14224,16969,16910,15024,13556,13607,11098,8808,15337,11570,11708,12657,15424,16488,19734,13692,15482,11483,11176,8629,4277,6136,9613,11149,6678,12912,8488,9641,6826,6802,6764,5208,5547,8395,3834,3221,6488,5048,2554,3733,4684,2501,2258,4719,2458,1307,4300,2580,1328,1149,2618,2746,2122,2994,6205,2468,1084,677,722,532,259,516,640,1913,3388,1094,1582,768,618,586440,470,933,760,596,447,493,2805,2430,1576,932,481,945,936,734,787,840,491,582,467,789,1705627,948,845,354,1141,566,468,515,479,1290,2019,361,502,648,498,382,1443,461,475,423,1372,1312,403,482,529,389,766,2565,3657,3227,616,4428,2278,1504,612,406,602,389,726,801,758,452,686,991,2299,677,1423,2797,891,1283,904,1329,552,751,589,636,741,764,3385,2380,3917,817,4270,1814,2067,1352,1109,991,684,1119,3177,2912,1196,617,693,805,807,693,1464,1022,844,570,548,675,3212,2029,1313,1986,2429,942,580,1319,861,1180,2561,2230,2177,3274,1353,1087,634,1200,704,1179,543,523,1067,1211,465,403,439,505,687,917,584,1174,1514,904,1344,689,689

/********************************************************************************************************************************/

instr 1  ; Midi Note Transmission

/**********************DATA INTAKE**************************/
iDatHi = 59914
iDatLo = 259

	iDatReadRate = p3
	iDatLen ftlen giSRIAEMI         
	kDatRead line 0, iDatReadRate, iDatLen 	                
	kDatIn tablei kDatRead,    giSRIAEMI
	
	
kData = ((127)*(kDatIn - iDatLo))/(iDatHi - iDatLo) ; 0-127 Usable for midi
	
	ky1 = ((1)*(kDatIn - iDatLo))/(iDatHi - iDatLo) ; 0-1
	ky = 1.001-ky1
/*****************/

;p4 = transposition factor
;p5 = speed factor
;p6 = function table for grain data
i1    =	sr/ftlen(1) ;scaling to reflect sample rate and table length
a1    phasor i1*p5 ;index for speed


i1    =	sr/ftlen(1) ;scaling to reflect sample rate and table length
a5    phasor i1/2 ;index for speed


/*******INITIAL Playback Variables*******/
ktHiA =2
ktLoA =0

kdensA = 20
kdurA   = .001

/****** Grain Cloud Variables*****/
ktHiB =10
ktLoB =5

kdensB =1000
kdurB = .75
/*********************************/


kDens =  kdensA + (kdensB - kdensA )  *ky1
kDur    =    kdurA + (kdurB - kdurA)         *ky1

	ktHi     =  ktHiA + (ktHiB - ktHiA)   *ky
	ktLo    =  ktLoA + (ktLoB - ktLoA)  *ky

kTrans random ktLo,ktHi


kDensR =   kDens-(((kDens/100)*25)*ky1)
kTransR = kTrans-(((kTrans/100)*25));*ky1)


kamp = .5*ky1

;ares          fog     xamp,     xdens,         xtrans,             aspd,          koct,      kband,      kris,      kdur,       kdec,      iolaps,      ifna,   ifnb,     itotdur   [, iphs] [, itmode] [, iskip]
aWaveL1  fog      kamp,          kDens,          kTrans,                a5,             ky,           0,       .001,        kDur,       .001,         5000,          1,     2,           p3,      0,            0	        
aWaveL2  fog       kamp,          kDens,          kTrans,                a5,             ky1,           0,       .001,        kDur,       .001,         5000,          1,     2,           p3,      0,            0	        
 
 aWaveR1  fog       kamp,          kDensR,      kTransR,                a5,             ky1,           0,       .001,        kDur,       .001,         5000,          1,     2,           p3,      0,            0	        
 aWaveR2  fog       kamp,          kDensR,      kTransR,                a5,             ky,           0,       .001,        kDur,       .001,         5000,          1,     2,           p3,      0,            0	        
    
    aWaveL = aWaveL1 + aWaveL2
    aWaveR = aWaveR1 + aWaveR2

    
    aWaveL lowpass2 aWaveL, 10000*ky, 1*ky1
    aWaveR lowpass2 aWaveR, 10000*ky, 1*ky1
        
      outs   aWaveL, aWaveR

endin

</CsInstruments>
<CsScore>
f 1 0 16777216 1 "Waves.wav" 0 0 0
f 2 0 1024 19 .5 .5 270 .5

i1 0 300


e
</CsScore>
</CsoundSynthesizer>
<bsbPanel>
 <label>Widgets</label>
 <objectName/>
 <x>100</x>
 <y>100</y>
 <width>320</width>
 <height>240</height>
 <visible>true</visible>
 <uuid/>
 <bgcolor mode="nobackground">
  <r>255</r>
  <g>255</g>
  <b>255</b>
 </bgcolor>
</bsbPanel>
<bsbPresets>
</bsbPresets>
