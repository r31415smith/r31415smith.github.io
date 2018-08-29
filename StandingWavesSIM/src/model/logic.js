/*************************************************************
 * 
 *************************************************************/
var logic = function()
{

    this.F = 31;

    this.f_min = 1;
    this.f_max = 1560;
    
    this.F_range_center = 31;
    this.f_mod_range = 30;
    
    this.amplitude_cofeicient = 0;
    this.string_alpha_coof = 1;
    
    this.A = 10;
    this.a_min = 1;
    this.a_max = 20;
    
    this.T = 10 ;
    this.t_min = 1;
    this.t_max = 40;
    
    this.M = 15 ;
    this.m_min = 1;
    this.m_max = 50;
    
    
    this.f_zero = 0;
    
    this.f_numb = 0;
    
    
    this.calc();

}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.setF = function(v)
{   
    
    if(v<this.f_min||v>this.f_max)
    {
        return 0;
    }
    this.F = v;
    
    this.F_range_center = v;
    if ( (this.F_range_center - this.f_mod_range) < 1 ) { // Prevent negative frequencies
	this.F_range_center = this.f_mod_range + 1 ; 
    }
    
    this.calc();
    return 1;
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.modF = function(v)
{   
    
    
    this.F = this.F_range_center+2*this.f_mod_range * (v - 0.5);
    
    //if(v<this.a_min || v>this.a_max)return;
    
    //console.log(this.F);
    this.calc();
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.setA = function(v)
{
    
    if(v<this.a_min || v>this.a_max)return;
    
    this.A = v;   
    this.calc();
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.setT = function(v)
{
    
    if(v<this.t_min || v>this.t_max)return;
    
    this.T = v;    
    this.calc();
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.setM = function(v)
{
    if(v<this.m_min || v>this.m_max)return;
    
    this.M = v;   
    this.calc();
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.calc = function()
{
    
    this.f_zero = 12.91*Math.sqrt((this.T*1.5)/(this.M));    

    this.f_numb = this.F / this.f_zero;
    
    
    
    
    Deviation = (this.F % this.f_zero)/this.f_zero;
    
    if(Deviation < 0.5)
    {
        this.f_numb = Math.floor(this.F / this.f_zero);
    }else{
        this.f_numb = Math.ceil(this.F / this.f_zero);
    }
    
    
    
    this.amplitude_cofeicient = Math.pow((Deviation-0.5),4)*16;
    //console.log("coof: "+this.f_numb/this.A);
    
    
    //this.string_alpha_coof = -1/(this.f_numb/this.A+0.2)+1;
    
    //console.log(this.f_zero.toFixed(2)+" , "+this.F.toFixed(2)+" , "+N.toFixed(2))
    
    //for(i=1; i <= Math.ceil(N); i++)
    /*for(i=1; i <= 5; i++)
    {
        //console.log(N - i)
        //console.log(N - i)
        if(Math.abs(N - i)<0.05)
        {
            this.f_numb = i;
        }
    }/* */
    
    

  
}
/*************************************************************
 * 
 *************************************************************/
logic.prototype.compareFrequencies = function()
{
    
    
    
}
/*************************************************************
 * 
 *************************************************************/
