/***************************************************
 * 
 ***************************************************/
var SineErgo = function (n)
{    
	this.context = new (window.AudioContext || window.webkitAudioContext)();

	this.oscillator = new Array();
	this.volume = new Array();
    
    for(var i = 0; i < n; i++)
	{
		this.oscillator[i] = this.context.createOscillator();
		this.oscillator[i].type = 0;
		this.oscillator[i].frequency.value = 0;

		this.volume[i] = this.context.createGain();
		this.volume[i].gain.value = 0;

		this.oscillator[i].connect(this.volume[i]);
		this.volume[i].connect(this.context.destination);

		this.oscillator[i].start(0);
    }
    
    
};
/***************************************************
 * 
 ***************************************************/
SineErgo.prototype.toString = function ()
{
    return 'Sine';
};
/***************************************************
 * 
 ***************************************************/
SineErgo.prototype.setFrequency = function (i, freq)
{
	this.oscillator[i].frequency.value = freq;
};
/***************************************************
 * 
 ***************************************************/
SineErgo.prototype.setVolume = function (i, vol)
{
	this.volume[i].gain.value = vol;
};
/***************************************************
 * 
 ***************************************************/

