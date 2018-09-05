/*************************************************************
 * 
 *************************************************************/
var logic = function()
{
    this.wave_interaction_type = 0 ; // No interaction
    this.waveform_type = 0 ; // Plane wave
    this.boundary_type = 0 ; // None
    this.wave_duration_type = 0 ; // Pulse
    this.binning_type = 1 ; // Medium-resolution
    
    this.absstrength = 0.99 ; // fraction of wave that is absorbed for every pixel of travel through absorbing medium
    
    this.frequency = 2 ; // second
    this.wavelength = 0.2 ; // meter
    this.user_theta = 40 ; // in degrees
    this.theta = this.user_theta / 360 * 2 * Math.PI ;
//    this.index_of_refraction = 1.33 ; // water relative to air
    this.index_of_refraction = 2 ; // so that it is visible
    this.scale = 256 ; // 256 pixels/meter
    this.maxcolor = 50 ; // colors go from 0 to 50
    this.halfmaxcolor = Math.floor(this.maxcolor/2) ;
    this.amplitude = 15 ; 
    this.amplitude = 25 ; 
    this.maxradius = 10 ;
    this.minradius = 0 ;
    this.flag_value = 9999 ;
    this.parabola_F = 0.40 ; // in m
    this.parabola_coeff = 1 / ( 4 * this.parabola_F ) ; // a = 1/4F, in m^-1
    this.parabola_vertex = 128 ; // will change this value dynamically
    this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
    this.curved_slope_bottom = 1 ;
    this.curved_slope_top = 1 ;
    this.curved_intercept_bottom = 100 ;
    this.curved_intercept_top = 100 ;
    this.num_slit = 1 ;
    
    this.slit_width_single = 0.2 ; // m; try 0.05, 0.1, 0.2, 0.4, 0.8
    this.slit_width_double = 0.05 ; // m
    this.slit_width = this.slit_width_single ;
    this.thickness = 4 ;
    this.diffraction_scaling = 1 ; // continuity factor for diffraction case

// Default settings so something happens on startup
    this.wave_interaction_type = 1 ; // reflection
    this.boundary_type = 6 ; // half wall
    this.wave_duration_type = 1 ; // continuous
    this.waveform_type = 0 ; // plane wave


/*
/////////////
// Testing sets for auto-initialization
    this.wave_interaction_type = 1 ; // Reflection off angled
    this.wave_duration_type = 1 ; 
    this.waveform_type = 1 ; 
    this.boundary_type = 3 ; 
    this.frequency  = 1 ; 
    this.wavelength = 0.2 ; 

    this.wave_interaction_type = 6 ; // Doppler
    this.wave_duration_type = 0 ; 
    this.waveform_type = 1 ; 
    this.boundary_type = 0 ; 
    this.frequency  = 1 ; 
    this.wavelength = 0.2 ; 
    
    this.wave_interaction_type = 4 ; // Absorption
    this.wave_duration_type = 1 ; // Continuous
    this.waveform_type = 0 ; // Plane
    this.boundary_type = 3 ; // Angled
    this.frequency  = 3 ; 
    this.wavelength = 0.2 ; 
    
    this.wave_interaction_type = 2 ; // Refraction
    this.wave_duration_type = 1 ; // Continuous
    this.waveform_type = 1 ; // Circular
    this.boundary_type = 3 ; // Angled
    this.frequency  = 3 ; 
    this.wavelength = 0.2 ; 

    this.wave_interaction_type = 3 ; // Diffraction
    this.wave_duration_type = 1 ; // Continuous
    this.waveform_type = 0 ; // Plane
    this.boundary_type = 1 ; // Flat wall
    this.boundary_type = 6 ; // Half wall
    this.frequency  = 2 ; 
    this.wavelength = 1 ; 
    this.wavelength = 0.2 ; 
    this.num_slit = 1 ; // diffraction through a single slit
    this.num_slit = 2 ; // diffraction through double slit
    this.half_wall = 0 ; // not around a half wall
    this.half_wall = 1 ; // diffraction around a half wall barrier (supersedes this.num_slit)

    this.wave_interaction_type = 1 ; // Reflection off concave mirror
    this.wave_duration_type = 1 ; // Continuous
    this.wave_duration_type = 0 ; // Pulse
    this.waveform_type = 1 ; // Circular wave
    this.waveform_type = 0 ; // Plane wave
    this.boundary_type = 5 ; // Convex mirror
    this.boundary_type = 4 ; // Concave mirror
    this.frequency  = 2 ; 
    this.wavelength = 0.2 ; 

    this.wave_interaction_type = 1 ; // Reflection
    this.wave_duration_type = 1 ; // Continuous
    this.waveform_type = 0 ; // Plane wave
    this.boundary_type = 6 ; // Half boundary

    this.wave_interaction_type = 3 ; // Diffraction  ZZZ
    this.wave_duration_type = 0 ; // Pulse
    this.waveform_type = 0 ; // Plane wave
    this.boundary_type = 6 ; // Half boundary

/////////////
*/




    this.time_interval = 0.1 ; // time in seconds between each calculation
    
    this.width = 256 ;
    this.width = 512 ;
    this.height = 256 ;
    this.x_bin = 4 ;
    this.y_bin = 4 ;

    this.x_smooth = 1 ; // set >= 1 to smooth in x or y
    this.y_smooth = 1 ; // set == 0 for no smoothing

    this.numwave = 2 ;
    this.numimage = 0 ;
    
    // testing    
    this.moo = 0;
    this.moo2 = 0 ;
    
    this.initCircularCentroids() ;
    this.buildCircularWaveRadii(); // do this once to set arrays
    this.buildSpeeds() ;
    this.initialize() ;
}



/****************************************************************************
  Control loop for creating the model of the tank for this time t
****************************************************************************/
logic.prototype.buildTankModel = function(time) {
    var wavelength = this.wavelength * this.scale ; // in pixels
    var frequency = this.frequency ;
    var amplitude = this.amplitude ;
    var frequency_time = frequency * time ;
    var phase = 0 ;

    this.maxradius = frequency * time * wavelength ; // for both pulse and continuous wave
    if ( this.wave_duration_type == 0 ) {
	this.minradius = frequency * time * wavelength - wavelength ; // for wave pulse
    } else {
	this.minradius = 0 ; // for continuous wave
    }
    if ( this.minradius < 0 ) { this.minradius = 0 ; }
    
    // Initialization stuff    
    if ( time == 0 ) {
	this.initialize() ;
    }

    // pass to function that will sort out different interactions
    tankModel = this.buildTankWaves(time);
    
    return tankModel ;
}



/*************************************************************
Calculate the radius of every pixel from the center of the circular sine wave
Do this once before running the simulation, rather than repeatedly at every time t
 *************************************************************/
logic.prototype.buildCircularWaveRadii = function()
{   
    var i, j ;
    var slope = this.reflect_circ_max_slope ;
    var intercept = this.reflect_circ_max_intercept ;
    var ymax, ywall ;

    // flat wall
    //    this.flat_begin = Math.floor(this.width*3/4) ;
    if ( this.wave_interaction_type == 3 ) { 
	this.flat_begin = Math.floor(this.width/2) ; 
    } else {
	this.flat_begin = Math.floor(this.width*5/8) ;
    }

    // Concave or convex mirror
    if ( this.boundary_type == 4 || this.boundary_type == 5 ) { // concave or convex mirror
	this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
	this.parabola_vertex = (3/4) * this.width ; // in pix


    // Concave mirror
	if ( this.boundary_type == 4 ) { 
        // focal point
	    var y_F = this.height/2 ;
	    var x_F = this.parabola_vertex - this.parabola_F * this.scale ;
        // intersection of mirror with top/bottom of tank
	    var y_bottom = 0 ;
	    var y_top = this.height ;
	    var x_bottom = this.parabola_vertex - this.a_parabola * Math.pow(this.height/2, 2)

	    if ( x_F != x_bottom ) { 
		this.curved_slope_bottom = (y_F - y_bottom) / (x_F - x_bottom) ;
		this.curved_slope_top = (y_F - y_top) / (x_F - x_bottom) ;
	    } else {
		this.curved_slope_bottom = -999999 ;
		this.curved_slope_top =  999999 ;
	    }
	    this.curved_intercept_bottom = y_F - this.curved_slope_bottom * x_F ;
	    this.curved_intercept_top = y_F - this.curved_slope_top * x_F ;

    // Convex mirror; this is not really needed...
	} else { 
	    var y_F = this.height/2 ;
	    var x_F = this.parabola_vertex + this.parabola_F * this.scale ;
	    var y_bottom = 0 ;
	    var y_top = this.height ;
	    var x_bottom = this.parabola_vertex + this.a_parabola * Math.pow(this.height/2, 2)
	    
	}


    }

    this.radiusCircular = new Array();
    this.absorption = new Array() ;
    for ( i=0 ; i<this.numwave ; i+=1 ) 
    {
	this.radiusCircular[i] = new Array();
	this.absorption[i] = new Array();
	for ( j=0 ; j<=this.numimage ; j+=1 ) {
	    this.radiusCircular[i][j] = new Array();
	    this.absorption[i][j] = new Array();
	    for ( x=0 ; x<this.width ; x+=this.x_bin ){
		this.radiusCircular[i][j][x] = new Array();
		this.absorption[i][j][x] = new Array();
		for ( y=0 ; y<this.height ; y+=this.y_bin ) {

		    if ( this.boundary_type == 3 ) {
			ymax = slope * x + intercept ;
			ywall = this.wall_slope * x + this.wall_intercept ;

			if ( this.wave_interaction_type == 2 && y < ywall ) { // refraction at angled surface

			    var delta = 0.2, deltay, testx, testy, distance1, distance2, testdistance, best_distance=9999 ;
// What is the least action path from the source xcent,ycent to the current pixel x,y?			    
// Calculate the distance and use the shortest one
	 		    for ( testy=0 ; testy<this.height ; testy+=delta ) {
				testx = (testy - this.wall_intercept) / this.wall_slope ;
				distance1 = Math.sqrt( Math.pow( testx-this.xcent[i][j], 2) + Math.pow( testy-this.ycent[i][j], 2)  ) ;
				distance2 = Math.sqrt( Math.pow( testx-x, 2) + Math.pow( testy-y, 2) ) ;
				testdistance = distance1 + distance2 * this.index_of_refraction ;
				if ( testdistance < best_distance ) {
				    best_distance = testdistance
				    this.radiusCircular[i][j][x][y] = testdistance ;
				}
			    }

			} else if ( j == 0 || y > ymax ) {
			    this.radiusCircular[i][j][x][y] = Math.sqrt( Math.pow(x-this.xcent[i][j],2) + Math.pow(y-this.ycent[i][j],2) ) ;

			} else if ( this.wave_interaction_type != 3 ) { // all but diffraction
			    this.radiusCircular[i][j][x][y] = this.flag_value ;
			}
		    } else {
// refraction at flat vertical surface 
			if ( this.wave_interaction_type == 2 && (this.boundary_type == 1 || (this.boundary_type == 6 && y > this.height/2) ) && (x > this.flat_begin) ) { 

// What is the least action path from the source xcent,ycent to the current pixel x,y?			    
			    var d = Math.abs(y - this.ycent[i][j]) ;
			    var a = this.flat_begin - this.xcent[i][j] ;
			    var b = x - this.flat_begin ;
			    var delta, deltay, best_deltay, best_diff = 9999, test_sine_thetai, test_sine_thetar, operand1, operand2, testratio, testdistance ;
			    delta = 0.2 ;

			    if ( d == 0 ) {
				this.radiusCircular[i][j][x][y] = a + b * this.index_of_refraction ;
			    } else {
// Calculate the angles of incidence and refraction and compare to the index of refraction; use the best match
	 		        for ( deltay=0 ; Math.abs(deltay)<Math.abs(d) ; deltay+=delta ) {
				    operand1 = a*a + deltay*deltay ;
				    operand2 = b*b + (d-deltay)*(d-deltay) ;
				    if ( operand1 > 0 && operand2 > 0 ) {
					testdistance = Math.sqrt( a*a + deltay*deltay ) + Math.sqrt( b*b + (d-deltay)*(d-deltay) ) * this.index_of_refraction ;
					if ( testdistance < best_diff ) {
					    best_deltay = deltay ;
					    best_diff = testdistance ;
					    this.radiusCircular[i][j][x][y] = testdistance ;
					}
				    }
				}
			    }

			} else if ( this.wave_interaction_type == 3 ) { 
			    if ( x >= this.flat_begin ) { 
				this.radiusCircular[i][j][x][y] = Math.sqrt( Math.pow(x-this.xcent[i][j],2) + Math.pow(y-this.ycent[i][j],2) ) ;
			    } else {
				this.radiusCircular[i][j][x][y] = 99999 ;
			    }
			} else {
			    this.radiusCircular[i][j][x][y] = Math.sqrt( Math.pow(x-this.xcent[i][j],2) + Math.pow(y-this.ycent[i][j],2) ) ;
			}
		    }

// Calculate absorption
		    this.absorption[i][j][x][y] = 1 ; 
		    if ( this.wave_interaction_type == 4 ) { // absorption
			if ( this.boundary_type == 1 ) { // flat vertical wall
			    if ( x > this.flat_begin ) {
				this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor(this.radiusCircular[i][j][x][y] * (x-this.flat_begin) / (x - this.xcent[i][j] ) ) ) ;
			    }
			} else if ( this.boundary_type == 6 ) { // half wall 
			    if ( x > this.flat_begin && y > this.height/2 ) {
				this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor(this.radiusCircular[i][j][x][y] * (x-this.flat_begin) / (x - this.xcent[i][j] ) ) ) ;
			    }
			} else if ( this.boundary_type == 3 ) { // angled wall
			    if ( y < (this.wall_slope*x + this.wall_intercept) ) {
				var newslope = (y-this.ycent[i][j]) / (x-this.xcent[i][j]) ;
				var newintercept = y - newslope*x ;
				var xintersection = (this.wall_intercept-newintercept) / (newslope-this.wall_slope) ;
				this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor( (x-xintersection)/(x-this.xcent[i][j])*this.radiusCircular[i][j][x][y] ) ) ;
			    }
			}
		    }
		    if ( this.absorption[i][j][x][y] < 0 ) { this.absorption[i][j][x][y] = 0 ; }

		}
	    }
	}
    }

    return ;
}

/*************************************************************
Calculate the radius of every pixel from the left wall origin of the plane wave
Do this once before running the simulation, rather than repeatedly at every time t
 *************************************************************/
logic.prototype.buildPlaneWaveRadii = function()
{   
    var i, j, k, y_wall, y_max_reflect ;

    if ( this.boundary_type == 3 ) {
	var slope = this.reflect_slope ;
	var intercept = this.reflect_intercept ;
    }

// flat wall
    if ( this.wave_interaction_type == 3 ) {
	this.flat_begin = Math.floor(this.width/2) ; 
    } else {
	this.flat_begin = Math.floor(this.width*5/8) ;
    }

    if ( this.wave_interaction_type == 2 && this.boundary_type == 3 ) { // refraction at angled surface
	var theta_inc = (Math.PI/2) - this.theta ; // angle of incidence
	var theta_refr = Math.asin( Math.sin(theta_inc) / this.index_of_refraction ) ; // angle of refraction
	var theta_ray = theta_refr - ( Math.PI/2 - this.theta ) ; // angle of refracted ray for LH coord system, <= 0 deg
	var slope_ray = Math.tan( theta_ray ) ;
    }
    if ( this.boundary_type == 4 || this.boundary_type == 5 ) { // concave or convex mirror
	this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
	this.parabola_vertex = (3/4) * this.width ; // in pix
    }

    this.radiusPlane = new Array();
    this.absorption = new Array() ;
    for ( i=0 ; i<this.numwave ; i+=1 ) {
	this.radiusPlane[i] = new Array();
	this.absorption[i] = new Array();
	for ( j=0 ; j<=this.numimage ; j+=1 ) {
	    this.radiusPlane[i][j] = new Array();
	    this.absorption[i][j] = new Array();
	    for ( x=0 ; x<this.width ; x+=this.x_bin ){
		this.radiusPlane[i][j][x] = new Array();
		this.absorption[i][j][x] = new Array();
		for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		    this.radiusPlane[i][j][x][y] = this.flag_value * 10 ; // flag value, very distant

//		    if ( (this.boundary_type >= 0 && this.boundary_type <= 2) || this.boundary_type == 6 ) { // none or flat, vertical walls
// none or flat, vertical walls, or concave/convex
		    if ( (this.boundary_type >= 0 && this.boundary_type <= 2) || this.boundary_type == 4 || this.boundary_type == 5 || this.boundary_type == 6 ) {  
			if ( this.wave_interaction_type == 2 && this.boundary_type == 1 ) { // refraction through flat boundary
			    if ( x > this.flat_begin) {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.flat_begin)*this.index_of_refraction + Math.abs(this.flat_begin-this.xcent[i][j]) ;
			    } else {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			    }
			} else if ( this.wave_interaction_type == 2 && this.boundary_type == 6 ) { // refraction through half boundary 
			    if ( x > this.flat_begin && y > this.height/2 ) {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.flat_begin)*this.index_of_refraction + Math.abs(this.flat_begin-this.xcent[i][j]) ;
			    } else {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			    }
			} else if ( this.wave_interaction_type == 3 ) { // diffraction
			    this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;

			} else if ( this.boundary_type == 4 ) { // concave mirror
			    var x_surface = this.parabola_vertex - this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
			    if ( x < x_surface ) {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			    } else {
				this.radiusPlane[i][j][x][y] = 99999 ;
			    }

			} else if ( this.boundary_type == 5 ) { // convex mirror 
			    var x_surface = this.parabola_vertex + this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
			    if ( x < x_surface ) {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			    } else {
				this.radiusPlane[i][j][x][y] = 99999 ;
			    }

			} else {
			    this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			}
		    } else if ( this.boundary_type == 3 ) { // flat, angled wall
			y_wall = this.wall_intercept + this.wall_slope * x ;

			if ( j == 0 ) { // wave itself
			    if ( y > y_wall || this.wave_interaction_type == 4 ) {
				this.radiusPlane[i][j][x][y] = Math.abs(x-this.xcent[i][j]) ;
			    } else if ( this.wave_interaction_type == 2 ) { // refraction 

				var intercept_ray = y - slope_ray*x ;
// refracted ray intersects the boundary surface at x0 = (b2 - b1)/(m1 - m2)
				var x_intersect = (intercept_ray - this.wall_intercept) / (this.wall_slope - slope_ray) ;
				var y_intersect = slope_ray*x_intersect + intercept_ray ;
				var distance_refr = Math.sqrt( Math.pow((x-x_intersect),2) + Math.pow((y-y_intersect),2) ) ;
				this.radiusPlane[i][j][x][y] = (x_intersect-this.xcent[i][j]) + distance_refr*this.index_of_refraction ;
			    }

			} else { // reflection
			    y_max_reflect = this.reflect_max_intercept + Math.tan( this.reflect_max_theta ) * x ;
			    if ( this.reflect_max_theta <= Math.PI/2 ) {
				if ( y > y_wall && y < y_max_reflect ) {
				    this.radiusPlane[i][j][x][y] = (this.width/2) + Math.sqrt( Math.pow( (x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)-x, 2 ) + Math.pow( slope*(x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)+intercept-y, 2 ) ) ;
				}
			    } else {
				if ( y > y_wall && y > y_max_reflect ) {
				    this.radiusPlane[i][j][x][y] = (this.width/2) + Math.sqrt( Math.pow( (x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)-x, 2 ) + Math.pow( slope*(x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)+intercept-y, 2 ) ) ;
				}
			    }
			}
		    }

		    this.absorption[i][j][x][y] = 1 ;
		    if ( this.boundary_type == 1 ) { // flat
			if ( x > this.flat_begin ) {
			    this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor(x-this.flat_begin) ) ;
			}
		    } else if ( this.boundary_type == 6 ) { // half wall 
			if ( x > this.flat_begin && y > this.height/2 ) {
			    this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor(x-this.flat_begin) ) ;
			}
		    } else if ( this.boundary_type == 3 ) {  // angled surface
// angled wall
			if ( y < (this.wall_slope*x + this.wall_intercept) ) {
			    this.absorption[i][j][x][y] = Math.pow( this.absstrength, Math.floor(x - ((y - this.wall_intercept)/this.wall_slope)) ) ;
			}

		    }
		    if ( this.absorption[i][j][x][y] < 0 ) { this.absorption[i][j][x][y] = 0 }


/* 
// Alternative:  average across the binned display pixel
		    this.radiusPlane[i][j][x][y] = 0 ;
		    for ( k=0 ; k<this.x_bin ; k+=1 ) {
			this.radiusPlane[i][j][x][y] += ((x+k) - this.xcent[i][j])/this.x_bin ;
		    }
*/

		}
	    }
	}
    }

    return ;
}



/******************************************************
 Set up various initialization parameters
******************************************************/
logic.prototype.initialize = function()
{   

    if ( this.boundary_type == 6 ) {
	this.half_wall = 1 ;
    } else {
	this.half_wall = 0 ;
    }

// HOW MANY IMAGES

//             none                                interference                       no boundary               absorption                   refraction
    if ( this.wave_interaction_type == 0 || this.wave_interaction_type == 5 || this.boundary_type == 0 || this.wave_interaction_type == 4 || this.wave_interaction_type == 2 ) { 
	this.numimage = 0 ;

//                          diffraction
    } else if ( this.wave_interaction_type == 3 ) {  

	if ( this.half_wall == 1 ) {  // HALF-WALL BARRIER
	    this.slit_width = (this.height/2) / this.scale ; // barrier is the bottom half of the tank

// Alternative:  virtual images above tank so that looks smooth on top   
	    this.numimage = Math.round( 2 * 5 * this.slit_width / this.wavelength ) ; // Increase number of sources across slit to make diffraction pattern smoother

	    if ( this.numimage < 1 ) { this.numimage = 1 ; }

	} else if ( this.num_slit == 1 ) {  // SINGLE SLIT
	    this.slit_width = this.slit_width_single ;
//	    this.numimage = Math.round( this.slit_width / this.wavelength ) ;
	    this.numimage = Math.round( 5 * this.slit_width / this.wavelength ) ; // Increase number of sources across slit to make diffraction pattern smoother
	    if ( this.numimage < 1 ) { this.numimage = 1 ; }

	} else if ( this.num_slit == 2 ) {  // DOUBLE SLIT
	    this.slit_width = this.slit_width_double ;
	    this.numimage = 2 ; // Both are narrow slits

	} else {
	}

//               flat wall                     angled wall                 tank wall && plane wave                            
    } else if ( this.boundary_type == 1 || this.boundary_type == 3 || (this.boundary_type == 2 && this.waveform_type == 0) ) {
	this.numimage = 1 ;

    } else if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) { // reflection off half wall 
	this.numimage = 1 ;

    } else if ( this.boundary_type == 2 ) { // tank walls && circular wave
	this.numimage = 4 ;

    } else if ( this.boundary_type == 4 ) { // concave
	if ( this.waveform_type == 0 ) { // plane wave input
	    this.numimage = 2 ; // image=1 is reflected off mirror; image=2 propagates outwards from F
	} else { // circular wave input
	    this.numimage = 1 ; // image=1 is plane wave reflected off mirror
	}

    } else if ( this.boundary_type == 5 ) { // convex
	this.numimage = 1 ; // circular wave reflected off mirror

    }

// HOW MANY WAVE SOURCES    
    if ( this.waveform_type == 0 ) { // Plane wave
	if ( this.wave_interaction_type == 5 ) { // interference
	    this.numwave = 2 ; 
	} else if ( this.wave_interaction_type == 6 ) { // Doppler
	    this.numwave = 16 ; 
	} else {
	    this.numwave = 1 ;
	}
	this.initPlaneCentroids() ;
    } else { // Circular sine wave
	if ( this.wave_interaction_type == 5 ) { // interference
	    this.numwave = 2 ; 
	} else if ( this.wave_interaction_type == 6 ) { // Doppler
	    this.numwave = 16 ; 
	} else { // single wave
	    this.numwave = 1 ;
	}

	if ( this.boundary_type == 4 ) { // concave mirror trick
	    this.initPlaneCentroids() ;
	} else {
	    this.initCircularCentroids() ;
	}
    }

// Angled wall 
    this.wall_slope = Math.tan( this.theta ) ;
    this.wall_intercept = - this.wall_slope * this.width/2 ;
    this.wall_theta = Math.atan( this.wall_slope ) ; // angled wall, in radians
// Reflected wave
    this.reflect_theta = 2 * Math.atan( this.wall_slope ) - Math.PI/2 ; // reflected wave angle
    this.reflect_slope = Math.tan( this.reflect_theta ) ; // slope reflected wave
    this.reflect_intercept = - (this.width/2) * this.reflect_slope ;
// Line defining maximum angle for plane wave reflection
    this.reflect_max_theta = 2 * this.wall_theta ;
    this.reflect_max_slope = Math.tan( this.reflect_max_theta ) ;
    this.reflect_max_intercept = - this.reflect_max_slope * this.width/2 ;

// Build the radii arrays once
// ... except for the case of diffraction (or concave mirror), where both plane and circular need to be built
//           diffraction                     concave mirror             convex mirror
    if ( this.wave_interaction_type == 3 || this.boundary_type == 4 || this.boundary_type == 5 ) { 
	var numimage = this.numimage ;
	this.buildCircularWaveRadii();
	this.numimage = 0 ;
	this.buildPlaneWaveRadii();
	this.numimage = numimage ;
    } else {
	if ( this.waveform_type == 0 ) { 
	    this.buildPlaneWaveRadii();
	} else if ( this.waveform_type == 1 ) {
	    this.buildCircularWaveRadii();
	}
    }


    // Initialize the wave speeds
    this.buildSpeeds() ;

// HOW MUCH SMOOTHING
// This currently has bugs:
//   1. reflection off angled surface shows vertical black lines
//   2. low-level artifact propagating far ahead of first wavefront
//    if ( this.boundary_type == 3 ) {
//	this.x_smooth = 1 ; // set >= 1 to smooth in x or y
//	this.y_smooth = 1 ; // set == 0 for no smoothing
//    } else {
// So leave it with no smoothing for now
// although this still has a bug:
//   3. black color at minimum along the reflected surface
	this.x_smooth = 0 ; // set >= 1 to smooth in x or y
	this.y_smooth = 0 ; // set == 0 for no smoothing
//    }

// AMPLITUDE 
    if ( this.wave_interaction_type == 3 ) { // diffraction
	this.amplitude = 20 ;  
    } else if ( this.boundary_type == 4 || this.boundary_type == 5 ) { // concave/convex mirror
	this.amplitude = 10 ;  
    } else if ( this.wave_interaction_type == 5 || this.waveform_type == 0 ) { // interference
	this.amplitude = 15 ; 
//    } else if ( this.wave_interaction_type == 6 ) { // Doppler
//	    this.amplitude = 15 ; 
    } else {
	this.amplitude = 25 ; 
    }

}

/******************************************************
Set up the wave speeds:  change in speed when refracting
******************************************************/
logic.prototype.buildSpeeds = function()
{   
    var index_local ;
    if ( this.wave_interaction_type == 2 ) {
	index_local = 1.5 ;
    } else {
	index_local = 1 ;
    }

    this.speed = new Array() ;
    for ( var i=0 ; i<this.numwave ; i+=1 ) {
	this.speed[i] = new Array() ;
	this.speed[i][0] = this.frequency * this.wavelength ;

	if ( this.numimage > 0 ) {
	    for ( var j=1 ; j<=this.numimage ; j+=1 ) {
//		this.speed[i][j] = this.frequency * this.wavelength / this.index_of_refraction ;
		this.speed[i][j] = this.frequency * this.wavelength / index_local ;
	    }
	}
    }

}

/******************************************************
Works for one or two circular sine waves, with or without reflections
******************************************************/
logic.prototype.buildTankWaves = function(time)
{   
    var radius1 ;
    var radius2 ;
    var wavelength = this.wavelength * this.scale ;
    var frequency = this.frequency ;
    var frequency_time = frequency * time ;
    var phase = 0 ;
    var x, y, i, j ;
    
    this.maxradius = frequency * time * wavelength ;

// Create the series of components for the waves
    tankModelComp = new Array() ;
    for ( i=0 ; i<this.numwave ; i+=1 ) {
	tankModelComp[i] = new Array() ;
	if ( this.waveform_type == 0 || (this.boundary_type == 4 && this.waveform_type == 1) ) {
	    tankModelComp[i][0] = this.buildOnePlaneSineWave( time, i, 0 ) ; 
	} else if ( this.waveform_type == 1 ) {
	    tankModelComp[i][0] = this.buildOneCircularSineWave( time, i, 0 ) ; 
	}
    }

// Create the series of components for the images (reflections)
//    if ( this.wave_interaction_type == 1 ) { // reflection
//       reflection     refraction     diffraction    absorption
    if ( this.wave_interaction_type >= 1 && this.wave_interaction_type <= 4 ) { 
	for ( i=0 ; i<this.numwave ; i+=1 ) {
	    for ( j=1 ; j<= this.numimage ; j+=1 ) {
//                      circular wave type    diffraction produces circular sine waves     concave mirror
		if ( this.waveform_type == 1 || this.wave_interaction_type == 3 || (this.boundary_type == 4 && this.waveform_type == 0) || this.boundary_type == 5 ) {  
		    tankModelComp[i][j] = this.buildOneCircularSineWave( time, i, j ) ; 
//		} else if ( this.waveform_type == 0 ) {
		} else {
		    tankModelComp[i][j] = this.buildOnePlaneSineWave( time, i, j ) ;
		}
	    }
	}
    }

// Initialize array
    tankModel = new Array();
    for ( x=0 ; x<this.width ; x+=this.x_bin ){
	tankModel[x] = new Array();
	for ( y=0 ; y<this.height ; y+=this.y_bin ) {
	    tankModel[x][y] = 0 ;
	}
    }

// Cycle through the number of waves
    var maxvalue = this.flag_value / 10 ;
    for ( i=0 ; i<this.numwave ; i+=1 ) {
// Cycle through the number of images of those waves
	for ( j=0 ; j<=this.numimage ; j+=1 ) {
	    var testtemp = tankModelComp[i][j] ;
	    for ( x=0 ; x<this.width ; x+=this.x_bin ){
		for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		    if ( this.wave_interaction_type == 3 ) { 
			if ( j > 0 ) {
			    if ( x <= this.flat_begin + this.thickness*this.x_bin/2 ) { 
// smoothly decrease contribution from plane wave across second half of slit
				tankModel[x][y] += testtemp[x][y] / Math.sqrt(this.numimage / this.num_slit ) * ( ( x - this.flat_begin ) / (this.thickness*this.x_bin/2) ) ; 
			    } else {
// ?do not understand why sqrt works rather than /numimage?
				tankModel[x][y] += testtemp[x][y] / Math.sqrt(this.numimage / this.num_slit) ; 
			    }
			} else if ( j == 0 ) {
			    if ( x < this.flat_begin ) {
				tankModel[x][y] += testtemp[x][y] ;
			    } else if ( x < this.flat_begin + this.thickness*this.x_bin/2 ) { 
// smoothly decrease contribution from plane wave across second half of slit
				tankModel[x][y] += testtemp[x][y] * ( this.flat_begin + this.thickness*this.x_bin/2 - x ) / (this.thickness*this.x_bin/2) ;
			    }
			}
		    } else if ( this.boundary_type == 4 || this.boundary_type == 5 ) {
			if ( this.boundary_type == 4 && this.waveform_type == 1 ) { // concave with input circular wave 
			    var x_surface = this.parabola_vertex - this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
			    if ( x < x_surface ) {
				tankModel[x][y] += testtemp[x][y] ;
			    }
			} else if ( this.boundary_type == 4 && this.waveform_type == 0 ) { // concave with input plane wave 
			    if ( i == 0 && j == 0 ) {
				var x_surface = this.parabola_vertex + this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
				if ( x < x_surface ) {
				    tankModel[x][y] += testtemp[x][y] ;
				}
			    } else if ( i == 0 && j == 1 ) { // circular wave moving from mirror to F
				var y_bottom = this.curved_slope_bottom * x + this.curved_intercept_bottom ;
				var y_top = this.curved_slope_top * x + this.curved_intercept_top ;
				if ( x >= this.xcent[i][j] && y >= y_bottom && y <= y_top ) {
				    tankModel[x][y] += testtemp[x][y] ;
				}
			    } else if ( i == 0 && j == 2 ) { // circular wave moving from F to left
				var y_bottom = this.curved_slope_bottom * x + this.curved_intercept_bottom ;
				var y_top = this.curved_slope_top * x + this.curved_intercept_top ;
				if ( x <= this.xcent[i][j] && y <= y_bottom && y >= y_top ) {
				    tankModel[x][y] += testtemp[x][y] ; 
				}
			    } else {
				var x_surface = this.parabola_vertex - this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
			    }				
			} else {
			    var x_surface = this.parabola_vertex + this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ;
			    if ( x < x_surface ) {
				tankModel[x][y] += testtemp[x][y] ;
			    }
			}
		    } else if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) { // reflection off of half wall 
			if ( i == 0 && j == 0 ) {
			    if ( y <= this.height/2 || x <= this.width/2 ) {
				tankModel[x][y] += testtemp[x][y] ;
			    }
			} else if ( i == 0 && j == 1 ) {
			    if ( y > this.height/2 && x <= this.width/2 ) {
				tankModel[x][y] += testtemp[x][y] ;
			    }
			}
		    } else {
			tankModel[x][y] += testtemp[x][y] ;
		    }
		}
	    }
	}
    }

// Smooth
    if ( this.x_smooth >= 1 || this.y_smooth >= 1 ) {
	tankModel = this.smoothPixels( tankModel ) ;
    }

// Offset and clip
    for ( x=0 ; x<this.width ; x+=this.x_bin ){
        for ( y=0 ; y<this.height ; y+=this.y_bin ) {
	    tankModel[x][y] = Math.floor(tankModel[x][y] + this.halfmaxcolor ) ;
	    if ( tankModel[x][y] > this.maxcolor ) { tankModel[x][y] = this.maxcolor ; }
	    if ( tankModel[x][y] < 0           ) { tankModel[x][y] = 0 ;           }
	}
    }

// Flag boundaries
    tankModel = this.flagBoundaries( tankModel ) ;

    return tankModel;
}



/*************************************************************
 * i = number of this wave source (0 or 1)
 * j = number of this source/image (0 for source itself, 1-4 for images of the wave source)
 *************************************************************/
logic.prototype.buildOneCircularSineWave = function(time,i,j){
    tankModel = new Array();
    var radius ;
    var wavelength = this.wavelength * this.scale ; // in pixels
    var frequency = this.frequency ;
    var frequency_time = frequency * time ;
    var phase = 0 ;

    if ( this.wave_interaction_type == 3 || (this.boundary_type == 4 && i == 0 && (j == 0 || j == 2) ) ) {  
	phase = ( this.timedelay[i][j] * this.frequency ) * (2 * Math.PI) ;
    }

    this.maxradius = this.speed[i][j] * (time - this.timedelay[i][j]) * this.scale ; // in pixels

    if ( this.wave_duration_type == 0 ) {
	this.minradius = this.maxradius - wavelength ; // for wave pulse
    } else {
	this.minradius = 0 ; // for continuous wave
    }
    if ( this.minradius < 0 ) { this.minradius = 0 ; }
    if ( this.maxradius < 0 ) { this.maxradius = 0 ; }

// special case for concave mirror/plane wave where reflected circular wave moves inward, not outward
    if ( this.wave_interaction_type == 1 && this.boundary_type == 4 && this.waveform_type == 0 && i == 0 && j == 1 ) {

// flip sign for (timedelay - time) rather than (time - timedelay); this makes min/max radii propagate inward
	this.minradius = this.speed[i][j] * (this.timedelay[i][j] - time) * this.scale + (this.parabola_vertex - this.xcent[i][j]) ; // in pixels

	if ( this.minradius < -wavelength ) {
	    this.minradius = -999999 ;
	}

	if ( this.wave_duration_type == 0 ) { 
	    this.maxradius = this.minradius + wavelength ; // for wave pulse
	} else { 
	    this.maxradius = 99999 ; // continuous
	}

	frequency_time *= -1 ; // makes wave go inward not outward 

// phase offset to get the reflected wave to be continuous with the incident one; add 180 deg shift, too
	phase -= ( (this.parabola_F*this.scale)/wavelength + this.frequency * this.timedelay[i][j] ) * 2 * Math.PI + Math.PI ; // in radians

    }
    if ( this.boundary_type == 5 && i == 0 && j == 1 ) { // convex flip phase sign
	phase += (this.timedelay[i][j] * this.frequency) * 2 * Math.PI ; // Number of oscillations * 2PI
    }


    if ( this.wave_interaction_type == 3 && this.boundary_type == 6 ) {
// Alternative:  additional (virtual) images above tank to make top of diffracted wave smoother
	this.diffraction_scaling = Math.sqrt(2) / (50 / (this.thickness/2 + 20 )) ; 
	this.diffraction_scaling = 1.5 / (50 / (this.thickness/2 + 20 )) ; 
	this.diffraction_scaling = 2.0 / (50 / (this.thickness/2 + 20 )) ;  // ZZZ
    } else if ( this.wave_interaction_type == 3 ) {
	this.diffraction_scaling = 1 / (50 / (this.thickness/2 + 20 )) ; 
    } else if ( this.boundary_type == 4 || this.boundary_type == 5 ) {
	this.diffraction_scaling = 1 / (50 / (this.parabola_F*this.scale + 20 )) ; // scaling for wave reflected off of curved mirror
    } else {
	this.diffraction_scaling = 1 ;
    }

    for ( x=0 ; x<this.width ; x+=this.x_bin ){
        tankModel[x] = new Array();
        for ( y=0 ; y<this.height ; y+=this.y_bin ) {
	    radius = this.radiusCircular[i][j][x][y] ;
	    if ( radius <= this.maxradius && radius > this.minradius ) { // changed second one:   >= to >
		tankModel[x][y] = (50/(radius+20)) * this.amplitude * this.diffraction_scaling * Math.sin( 2 * Math.PI * ( (radius/wavelength) - frequency_time ) + phase ) ; 
	    } else {
		tankModel[x][y] = 0 ;
	    }
	    if ( this.wave_interaction_type == 4 ) {
		tankModel[x][y] = tankModel[x][y] * this.absorption[i][j][x][y] ;
	    }
	}
    }

    return tankModel;
}

/*************************************************************
 * i = number of this wave source (0 or 1)
 * j = number of this source/image (0 for source itself, 1-4 for images of the wave source)
 *************************************************************/
logic.prototype.buildOnePlaneSineWave = function(time,i,j){
    tankModel = new Array();
    var radius ;
    var wavelength = this.wavelength * this.scale ; // in pixels
    var frequency = this.frequency ;
    var frequency_time = frequency * time ;
    var phase = 0 ;

    this.maxradius = this.speed[i][j] * (time - this.timedelay[i][j]) * this.scale ; // in pixels

    if ( this.wave_duration_type == 0 ) {
	this.minradius = this.maxradius - wavelength ; // for wave pulse
    } else {
	this.minradius = 0 ; // for continuous wave
    }
    if ( this.minradius < 0 ) { this.minradius = 0 ; }
    if ( this.maxradius < 0 ) { this.maxradius = 0 ; }

    for ( x=0 ; x<this.width ; x+=this.x_bin ){
        tankModel[x] = new Array();
        for ( y=0 ; y<this.height ; y+=this.y_bin ) {
	    radius = this.radiusPlane[i][j][x][y] ;
	    if ( radius > this.flag_value ) {
//		tankModel[x][y] = this.flag_value ; // flag value
		if ( this.wave_interaction_type != 4 ) {
		    tankModel[x][y] = 0 ; // flag value
		}
	    } else if ( radius <= this.maxradius && radius >= this.minradius ) {
		tankModel[x][y] = this.amplitude * Math.sin( 2 * Math.PI * ( (radius/wavelength) - frequency_time ) + phase ) ;
	    } else {
		tankModel[x][y] = 0 ;
	    }
	    if ( this.wave_interaction_type == 4 ) {
		tankModel[x][y] = tankModel[x][y] * this.absorption[i][j][x][y] ;
	    }
	}
    }

    return tankModel;
}

/*************************************************************
 * i = number of this wave source (0 or 1)
 * j = number of this source/image (0 for source itself, 1-4 for images of the wave source)
 *************************************************************/
logic.prototype.flagBoundaries = function( tankModel ){
    var y_wall ;

    if ( this.boundary_type == 1 && this.wave_interaction_type != 4 && this.wave_interaction_type != 2 && this.wave_interaction_type != 3 ) { // flat boundary, but not absorption/diffraction
	this.thickness = 4 ;
//	var xbeg = Math.floor(this.width*3/4) ;
	var xbeg = Math.floor(this.width*5/8) ;
	var xend = xbeg + this.x_bin*this.thickness ;
	for ( x=xbeg ; x<xend ; x+=this.x_bin ){
            for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		tankModel[x][y] = this.maxcolor + 1 ;
	    }
	}
	for ( x=xend ; x<this.width ; x+=this.x_bin ){
            for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		tankModel[x][y] = this.halfmaxcolor ;
	    }
	}
//                     diffraction              OR          reflection   +    half-wall  
    } else if ( this.wave_interaction_type == 3 || (this.wave_interaction_type == 1 && this.boundary_type == 6) ) { 

	this.thickness = 4 ; 
	if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) {
	    var xbeg = Math.floor(this.width*1/2) ;
	} else {
	    var xbeg = Math.floor(this.width*1/2 - 1/2*this.x_bin*this.thickness) ;
	}
	var xend = xbeg + this.x_bin*this.thickness ;

// Make the reflection off a half, solid rectangular block, not a half wall
	if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) { 
	    var xbeg = Math.floor(this.width*1/2 - 1/2*this.x_bin*this.thickness) ;
	    var xend = this.width ;
	}

	if ( this.half_wall == 1 ) { 
	    for ( x=xbeg ; x<xend ; x+=this.x_bin ){
		for ( y=this.height ; y>this.height/2 ; y-=this.y_bin ) {
		    tankModel[x][y] = this.maxcolor + 1 ;
		}
	    }

	} else if ( this.num_slit == 1 ) { 
	    for ( x=xbeg ; x<xend ; x+=this.x_bin ){ 
		for ( y=0 ; y<(this.height-this.slit_width*this.scale)/2 ; y+=this.y_bin ) {
		    tankModel[x][y] = this.maxcolor + 1 ;
		}
		for ( y=this.height ; y>(this.height+this.slit_width*this.scale)/2 ; y-=this.y_bin ) {
		    tankModel[x][y] = this.maxcolor + 1 ;
		}
	    }

	} else if ( this.num_slit == 2 ) {
	    for ( x=xbeg ; x<xend ; x+=this.x_bin ){  
		for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		    if ( y<this.ycent[0][1]-this.slit_width*this.scale/2 ) {
			tankModel[x][y] = this.maxcolor + 1 ;
		    } else if ( y>this.ycent[0][1]+this.slit_width*this.scale/2 && y<this.ycent[0][2]-this.slit_width*this.scale/2 )  {
			tankModel[x][y] = this.maxcolor + 1 ;
		    } else if ( y>this.ycent[0][2]+this.slit_width*this.scale/2 )  {
			tankModel[x][y] = this.maxcolor + 1 ;
		    }
		}	    
	    }
	}
    } else if ( this.boundary_type == 3 && this.wave_interaction_type != 4 && this.wave_interaction_type != 2 ) { // angled boundary, but not absorption
	this.thickness = 4 / Math.cos( this.theta ) ;
	for ( x=0 ; x<this.width ; x+=this.x_bin ){
            for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		y_wall = this.wall_intercept + this.wall_slope * x ;
		if ( y <= y_wall ) {
		    if ( y >= y_wall - this.thickness*this.y_bin ) {
			tankModel[x][y] = this.maxcolor + 1 ;
		    } else {
			tankModel[x][y] = this.halfmaxcolor ;
		    }
		}
	    }
	}

    } else if ( this.wave_interaction_type == 1 && this.boundary_type ==5 ) { // Reflection off convex surface
	this.thickness = 5.5 ;
	for ( x=0 ; x<this.width ; x+=this.x_bin ){
            for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		var x_surface = Math.floor( this.parabola_vertex + this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ) ;
		if ( x >= x_surface ) {
		    if ( x <= x_surface + this.thickness*this.x_bin ) {
			tankModel[x][y] = this.maxcolor + 1 ;
		    } else {
			tankModel[x][y] = this.halfmaxcolor ;
		    }
		}
	    }
	}

    } else if ( this.wave_interaction_type == 1 && this.boundary_type ==4 ) { // Reflection off concave surface
	this.thickness = 5.5 ;
	for ( x=0 ; x<this.width ; x+=this.x_bin ){
            for ( y=0 ; y<this.height ; y+=this.y_bin ) {
		var x_surface = Math.floor( this.parabola_vertex - this.a_parabola * Math.pow( (y-this.ycent[0][0]), 2 ) ) ;
		if ( x >= x_surface ) {
		    if ( x <= x_surface + this.thickness*this.x_bin ) {
			tankModel[x][y] = this.maxcolor + 1 ;
		    } else {
			tankModel[x][y] = this.halfmaxcolor ;
		    }
		}
	    }
	}
    }

    return tankModel;
}



logic.prototype.smoothPixels = function( tankModel ){

    var i, j, tempvalue, num ;
    var xmin, xmax, ymin, ymax ;
    var imin, imax, jmin, jmax ;
    var flagvalue = this.flag_value / 10 ;

    var newModel = tankModel ;

    xmin = this.x_smooth*this.x_bin ;
    xmax = this.width - this.x_smooth*this.x_bin ;
    ymin = this.y_smooth*this.y_bin ;
    ymax = this.height - this.y_smooth*this.y_bin ;

//    for ( x=this.x_bin ; x<this.width-this.x_bin ; x+=this.x_bin ){
    for ( x=xmin ; x<xmax ; x+=this.x_bin ){
        for ( y=ymin ; y<ymax ; y+=this.y_bin ) {
	    tempvalue = 0 ; // initialize
	    num = 0 ;

	    imin = x - this.x_smooth*this.x_bin ;
	    imax = x + this.x_smooth*this.x_bin ;
	    jmin = y - this.y_smooth*this.y_bin ;
	    jmax = y + this.y_smooth*this.y_bin ;

	    for ( i=imin ; i<=imax ; i+=this.x_bin ) {
		for ( j=jmin ; j<=jmax ; j+=this.y_bin ) {
		    if ( tankModel[i][j] < flagvalue ) {
			num += 1 ;
			tempvalue += tankModel[i][j] ;
		    }
		}
	    }
	    if ( num > 0 ) {
		newModel[x][y] = tempvalue / num ;
	    }
	}
    }

    return newModel ;
}












/*************************************************************
 * NOTHING CURRENTLY CALLS THIS FUNCTION
 *************************************************************/
logic.prototype.buildTankCircularSine = function(time)
{   
    var radius ;
    var xcent = Math.round(this.width / 2) ;
    var ycent = Math.round(this.height / 2) ;
    var wavelength = this.width/20 ;
    var frequency = 1 ;
    var frequency_time = frequency * time ;
    var value = 0 ;
    var phase = 0 ;
    var i, j ;

    this.maxradius = frequency * time * wavelength ;

    tankModel = new Array();
    for ( x=0 ; x<this.width ; x+=this.x_bin ){
        tankModel[x] = new Array();
        for ( y=0 ; y<this.height ; y+=this.y_bin ) {
	    radius = Math.sqrt( Math.pow(x-xcent,2) + Math.pow(y-ycent,2) ) ;
	    if ( radius <= this.maxradius ) {
		tankModel[x][y] = (radius/50) * this.amplitude * Math.sin( 2 * Math.PI * ( (radius/wavelength) - frequency_time ) + phase ) + this.amplitude ;
	    } else {
		tankModel[x][y] = this.amplitude ;
	    }
	    tankModel[x][y] = Math.floor(tankModel[x][y]) ;
	}
    }

    return tankModel;
}

/*************************************************************
Testing
 *************************************************************/
logic.prototype.buildTankRandom = function()
{   
    var moo = this.moo;
    var moo2 = this.moo2;
    var moo2max = 1 ;

    if ( moo2 >= moo2max ) {
	tankModel = new Array();
	for ( x=0 ; x<this.height ; x+=this.x_bin ){
            tankModel[x] = new Array();
            for ( y=0 ; y<this.width ; y+=this.y_bin ) {
		//            tankModel[x][y] = Math.floor(Math.random()*5);
		for ( var j=1 ; j<=1 ; j+=1 ) {
		    tankModel[x][y] = moo + 1.5*Math.random() ;
		    tankModel[x][y] = Math.floor(tankModel[x][y]) ;
		    if ( tankModel[x][y] >= 5 ) { tankModel[x][y] -= 5 }
		}
	    }
	}
	this.moo2=0 ;
    }
    this.moo2++ ;
    this.moo++;
    if(this.moo>4)this.moo = 0;
    
    return tankModel;
}

/*************************************************************
 * 
 *************************************************************/
logic.prototype.setInteraction = function(a)
{
    this.wave_interaction_type = a;
    if ( this.wave_interaction_type == 5 ) { // interference
	this.boundary_type = 0 ;
    }
    if ( this.wave_interaction_type == 6 ) { // Doppler effect
	this.boundary_type = 0 ; // none [required]
	this.waveform_type = 1 ; // circular [required]
	this.wave_duration_type = 0 ; // pulse [recommended]
    }
    if ( this.wave_interaction_type == 3 ) { // Diffraction
	if ( this.boundary_type != 1 && this.boundary_type != 6 ) {
	    this.boundary_type = 1 ; // none [required]
	}
	this.waveform_type = 0 ; // plane [required]
    }
    if ( (this.wave_interaction_type == 4 || this.wave_interaction_type == 2) && (this.boundary_type == 2 || this.boundary_type == 4 || this.boundary_type == 5 ) ) { 
	this.boundary_type = 1 ; // set it to flat boundary
    }
}
logic.prototype.setBinning = function(a)
{
    this.binning_type = a ;
    if ( this.binning_type == 0 ) {
	this.x_bin = 8 ;
	this.y_bin = 8 ;
    } else if ( this.binning_type == 1 ) {
	this.x_bin = 4 ;
	this.y_bin = 4 ;
    } else if ( this.binning_type == 2 ) {
	this.x_bin = 2 ;
	this.y_bin = 2 ;
    }
}
logic.prototype.setWaveForm = function(a)
{

// Doppler only allows circular waves
// Diffraction only allows plane waves
    if ( this.wave_interaction_type != 6 && this.wave_interaction_type != 3 && this.boundary_type != 5 ) { 
	this.waveform_type = a;
    }
}

logic.prototype.setWaveDuration = function(a)
{
// Doppler only allows continuous waves
    if ( this.wave_interaction_type != 6 ) {
	this.wave_duration_type = a;
    }
}
    
logic.prototype.setBoundary = function(a)
{

    if ( ( this.wave_interaction_type != 5 && this.wave_interaction_type != 6 && !( (this.wave_interaction_type == 4 || this.wave_interaction_type == 2) && (a >= 4 || a == 2)) && !( this.wave_interaction_type == 3 && (a < 1 || (a>1&&a<6) ) ) && a != 6 ) || ( a == 6 && (this.wave_interaction_type >= 1 && this.wave_interaction_type <= 4) ) ) {
	this.boundary_type = a;
    } 

    if ( this.boundary_type == 6 ) {
	this.half_wall = 1 ;
    } else {
	this.half_wall = 0 ;
    }

    if ( this.boundary_type == 5 ) {
	this.waveform_type = 0 ;
    }

}

logic.prototype.setNumSlit = function(a)
{
    this.num_slit = a;
}

/*************************************************************
 * 
 *************************************************************/
logic.prototype.setFrequency = function(a)
{
    if ( a > 0 ) {
	this.frequency = a;
    }
}
logic.prototype.setWavelength = function(a)
{
    if ( a > 0 ) {
	this.wavelength = a;
    }
}
logic.prototype.setTheta = function(a)
{
    if ( a >= 1 && a <= 89 ) {
	this.user_theta = a ;
	this.theta = this.user_theta / 360 * 2 * Math.PI ;
	this.initialize() ;
    }
}
logic.prototype.setIndexRefraction = function(a)
{
    if ( a >= 1 && a <= 5 ) {
	this.index_of_refraction = a ;
	this.initialize() ;
    }
}
/*************************************************************
 * 
 *************************************************************/

// Center of two circular waves and their reflection images
logic.prototype.initCircularCentroids = function() {
    var i, j ;
    this.xcent = new Array();
    this.xcent[0] = new Array();
    this.xcent[1] = new Array();
    this.ycent = new Array();
    this.ycent[0] = new Array();
    this.ycent[1] = new Array();
    if ( this.numwave == 1 ) {
	this.xcent[0][0] = Math.floor( 1/4*(this.width/this.x_bin) )*this.x_bin ; // Center of circular wave #1
// Make the circular wave not centered in y so that its reflections are clearer
	this.ycent[0][0] = Math.floor( 3/8*(this.height/this.y_bin) )*this.y_bin ; 
    } else if ( this.numwave == 2 ) {
	this.xcent[0][0] = Math.floor( 3/8*(this.width/this.x_bin) )*this.x_bin ; // Center of circular wave #1
	this.ycent[0][0] = Math.floor( 3/8*(this.height/this.y_bin) )*this.y_bin ; 
    }
// Always 
    this.xcent[1][0] = Math.floor( 5/8*(this.width/this.x_bin) )*this.x_bin ; // Center of circular wave #2
    this.ycent[1][0] = Math.floor( 5/8*(this.height/this.y_bin) )*this.y_bin ; 

// two circular waves bouncing off tank walls
    if ( this.wave_interaction_type == 1 ) {
	this.xcent[0][1] = -this.xcent[0][0] ; // Reflection off LH wall
	this.ycent[0][1] =  this.ycent[0][0] ;
	this.xcent[0][2] =  this.xcent[0][0] ; // Reflection off upper wall
	this.ycent[0][2] = -this.ycent[0][0] ;
	this.xcent[0][3] =  this.xcent[0][0]+2*(this.width-this.xcent[0][0]) ; // Reflection off RH wall
	this.ycent[0][3] =  this.ycent[0][0] ;
	this.xcent[0][4] =  this.xcent[0][0] ;                                 // Reflection off bottom wall
	this.ycent[0][4] =  this.ycent[0][0]+2*(this.height-this.ycent[0][0]) ;
	
	this.xcent[1][1] = -this.xcent[1][0] ; // Reflection off LH wall
	this.ycent[1][1] =  this.ycent[1][0] ;
	this.xcent[1][2] =  this.xcent[1][0] ; // Reflection off upper wall
	this.ycent[1][2] = -this.ycent[1][0] ;
	this.xcent[1][3] =  this.xcent[1][0]+2*(this.width-this.xcent[1][0]) ; // Reflection off RH wall
	this.ycent[1][3] =  this.ycent[1][0] ;
	this.xcent[1][4] =  this.xcent[1][0] ;                                 // Reflection off bottom wall
	this.ycent[1][4] =  this.ycent[1][0]+2*(this.height-this.ycent[1][0]) ;
    }

// reflection off of half wall 
    if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) {
	this.ycent[0][0] = Math.floor( 1/2*(this.height/this.y_bin) )*this.y_bin ; // center input wave vertically 
	this.xcent[0][1] = Math.floor( this.width/2 + (this.width/2-this.xcent[0][0]) ) ; // Reflection off half-wall
	this.ycent[0][1] =  this.ycent[0][0] ;
    }

// refraction/absorption through half boundary 
    if ( (this.wave_interaction_type == 2 || this.wave_interaction_type == 4) && this.boundary_type == 6 ) {
	this.ycent[0][0] = Math.floor( 1/2*(this.height/this.y_bin) )*this.y_bin ; // center input wave vertically 
    }

// two circular wave interference reflecting off flat surface
    if ( this.wave_interaction_type == 1 ) { // 
	if ( this.boundary_type == 1 ) {
//	    this.xcent[0][1] =  this.xcent[0][0]+ 2*((3/4)*this.width-this.xcent[0][0])  ; // Reflection off flat wall
	    this.xcent[0][1] =  Math.floor( this.xcent[0][0]+ 2*((5/8)*this.width-this.xcent[0][0]) )  ; // Reflection off flat wall
	    this.ycent[0][1] =  Math.floor( this.ycent[0][0] ) ;
	} else if ( this.boundary_type == 3 ) {
	    var slope = this.wall_slope ;
	    var intercept = this.wall_intercept ;
	    var x = this.xcent[0][0] ;
	    var y = this.ycent[0][0] ;
	    var distance = Math.sqrt( Math.pow( (x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)-x, 2 ) + Math.pow( slope*(x+slope*y-slope*intercept)/(Math.pow(slope,2)+1)+intercept-y, 2 ) ) ;

	    this.xcent[0][1] = Math.floor( this.xcent[0][0] + 2 * distance * Math.sin( this.theta ) ) ;
	    this.ycent[0][1] = Math.floor( this.ycent[0][0] - 2 * distance * Math.cos( this.theta ) ) ;

// Line defining maximum angle for circular wave reflection
// Line passes through image of source and (xwidth/2,0)
	    this.reflect_circ_max_slope = ( 0 - this.ycent[0][1] ) / ( (this.width/2) - this.xcent[0][1] ) ;
	    this.reflect_circ_max_theta = Math.atan( this.reflect_circ_max_slope ) ;
	    this.reflect_circ_max_intercept = ( this.ycent[0][1] * this.width ) / ( this.width - 2 * this.xcent[0][1] ) ;
	}
    }


    if ( this.wave_interaction_type == 6 ) { // Doppler
	this.xcent = new Array() ;
	this.ycent = new Array() ;
	this.xcent[0] = new Array() ;
	this.ycent[0] = new Array() ;
	this.xcent[0][0] = Math.floor( 1/16*(this.width/this.x_bin) )*this.x_bin ; // Center of circular wave #1
	this.ycent[0][0] = Math.floor( 1/2*(this.height/this.y_bin) )*this.y_bin ; 
	for ( i=1 ; i<this.numwave ; i+=1 ) {
	    this.xcent[i] = new Array() ;
	    this.ycent[i] = new Array() ;
	    this.xcent[i][0] = Math.floor( this.xcent[0][0] + (this.width-this.xcent[0][0])/(this.numwave+1)*i*1.1 ) ;
	    this.ycent[i][0] = Math.floor( this.ycent[0][0] ) ; 
	} 
    }

    if ( this.wave_interaction_type == 4 ) { // absorption
	this.xcent[0][1] = this.xcent[0][0] ;
	this.ycent[0][1] = this.ycent[0][0] ;
    }



    if ( this.wave_interaction_type == 3 ) { // diffraction 
	if ( this.numimage == 1 ) {
	    this.xcent[0][1] = Math.floor(this.xcent[0][0]+(1/2)*(this.width-this.xcent[0][0])) ; 
	    this.ycent[0][1] = Math.floor(this.ycent[0][0]) ;
	} else if ( this.numimage > 1 ) {
	    for ( var ii=1 ; ii<=this.numimage ; ii+=1 ) {
		this.xcent[0][ii] =  Math.floor(this.xcent[0][0]+(1/2)*(this.width-this.xcent[0][0])) ; 
		if ( this.half_wall == 1 ) {
// Alternative:  have virtual images sitting above the tank
		    this.ycent[0][ii] =  Math.floor( 2 * (this.slit_width*this.scale)/(this.numimage+1)*ii - this.slit_width*this.scale ) ; 
		} else if ( this.num_slit == 1 ) {
		    this.ycent[0][ii] =  Math.floor(this.ycent[0][0] - 0.5*this.slit_width*this.scale + (this.slit_width*this.scale)/(this.numimage+1)*ii) ;
		} else if ( this.num_slit == 2 ) {
		    this.ycent[0][ii] =  Math.floor( (ii*2-1) * this.height / (this.numimage+2) ) ; // slits at 1/4 and 3/4 of height
		}
	    }
	}
    }



// Set up time delays
    this.timedelay = new Array() ;
    for ( var i=0 ; i<this.numwave ; i+=1 ) {
	this.timedelay[i] = new Array() ;
	for ( var j=0 ; j<=this.numimage ; j+=1 ) {
	    if ( this.wave_interaction_type == 6 ) { // Doppler
		this.timedelay[i][j] = 0.5 * i ;
		this.timedelay[i][j] = 1.0 * i ;
	    } else if ( this.wave_interaction_type == 3 ) { 
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else {
		    this.timedelay[i][j] = ( (this.xcent[i][j]-this.xcent[0][0])/this.scale ) / (this.frequency * this.wavelength) ; 
		}
	    } else if ( this.boundary_type == 4 && this.waveform_type == 0 ) {  // concave mirror, input plane wave 
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else if ( j == 1 ) {  // reflected wave moving toward the focus
		    this.timedelay[i][j] = (  (this.parabola_vertex - this.xcent[i][0] )/this.scale ) / (this.frequency * this.wavelength) ;
		} else if ( j == 2 ) {  // reflected wave that has moved past the focus
		    this.timedelay[i][j] = ( ( (this.parabola_vertex - this.xcent[i][0] ) + (this.parabola_vertex - this.xcent[i][j]) )/this.scale ) / (this.frequency * this.wavelength) ;
		}
	    } else if ( this.boundary_type == 4 && this.waveform_type == 1 ) {  // concave mirror, input circular wave 
		this.timedelay[i][j] = 0 ;
	    } else if ( this.boundary_type == 5 ) {  // convex mirror
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else if ( j == 1 ) {  // reflected wave moving toward the focus
//		    this.timedelay[i][j] = (  (this.parabola_vertex - this.xcent[i][0] )/this.scale ) / (this.frequency * this.wavelength) ;
		    this.timedelay[i][j] = ( ( (this.parabola_vertex - this.xcent[0][0]) - (this.parabola_vertex - this.xcent[i][0]) )/this.scale ) / (this.frequency * this.wavelength) ;
		} 
	    } else {
		this.timedelay[i][j] = 0 ;
	    }
	}
    }

}


// Plane waves enter from the left
logic.prototype.initPlaneCentroids = function() {
    this.xcent[0][0] = 0 ;
    this.ycent[0][0] = Math.floor( 1/2*(this.height/this.y_bin) )*this.y_bin ; 

    if ( this.wave_interaction_type == 5 ) { // interference
	this.xcent[1][0] = this.width ;
	this.ycent[1][0] = Math.floor( 1/2*(this.height/this.y_bin) )*this.y_bin ; 
    }

    if ( this.boundary_type == 0 ) { // None
    } else if ( this.boundary_type == 1 ) { // Reflection off vertical flat surface
//	this.xcent[0][1] =  this.xcent[0][0]+(3/4)*(this.width-this.xcent[0][0])*2 ; 
	this.xcent[0][1] =  this.xcent[0][0]+(5/8)*(this.width-this.xcent[0][0])*2 ; 
	this.ycent[0][1] =  this.ycent[0][0] ;
    } else if ( this.boundary_type == 2 ) { // Reflection off RH wall
	this.xcent[0][1] =  this.xcent[0][0]+2*(this.width-this.xcent[0][0]) ; 
	this.ycent[0][1] =  this.ycent[0][0] ;
    }

    if ( this.wave_interaction_type == 3 ) { // diffraction
	if ( this.numimage == 1 ) {
	    this.xcent[0][1] = Math.floor(this.xcent[0][0]+(1/2)*(this.width-this.xcent[0][0])) ; 
	    this.ycent[0][1] = Math.floor(this.ycent[0][0]) ;
	} else if ( this.numimage > 1 ) {
	    for ( var ii=1 ; ii<=this.numimage ; ii+=1 ) {
		this.xcent[0][ii] =  Math.floor(this.xcent[0][0]+(1/2)*(this.width-this.xcent[0][0])) ; 

		if ( this.half_wall == 1 ) {
// Alternative:  have virtual images sitting above the tank
		    this.ycent[0][ii] =  Math.floor( 2 * (this.slit_width*this.scale)/(this.numimage+1)*ii - this.slit_width*this.scale ) ; 

		} else if ( this.num_slit == 1 ) {
		    this.ycent[0][ii] =  Math.floor(this.ycent[0][0] - 0.5*this.slit_width*this.scale + (this.slit_width*this.scale)/(this.numimage+1)*ii) ;

		} else if ( this.num_slit == 2 ) {
// OLD
//		    this.ycent[0][ii] =  Math.floor( ii * this.height / (this.numimage+1) ) ; // slits at 1/3 and 2/3 of height
		    this.ycent[0][ii] =  Math.floor( (ii*2-1) * this.height / (this.numimage+2) ) ; // slits at 1/4 and 3/4 of height

		}
	    }
//	    alert ( this.xcent[0][0] ) ;
//	    alert ( this.ycent[0][0] ) ;
	}
    }

// reflection off of half wall 
    if ( this.wave_interaction_type == 1 && this.boundary_type == 6 ) {
	this.xcent[0][1] =  this.width/2 + (this.width/2-this.xcent[0][0]) ; // Reflection off half-wall
	this.ycent[0][1] =  this.ycent[0][0] ;
    }

    if ( this.boundary_type == 4 && this.waveform_type == 0 ) { // reflection off concave mirror, input plane wave
	this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
	this.parabola_vertex = (3/4) * this.width ; // in pix

	this.xcent[0][1] = this.parabola_vertex - this.parabola_F * this.scale ;
	this.ycent[0][1] = this.height/2 ;
	this.xcent[0][2] = this.xcent[0][1] ;
	this.ycent[0][2] = this.ycent[0][1] ;
    }
    if ( this.boundary_type == 4 && this.waveform_type == 1 ) { // reflection off concave mirror, input circular wave
	this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
	this.parabola_vertex = (3/4) * this.width ; // in pix

	this.xcent[0][0] = this.parabola_vertex + this.parabola_F * this.scale ; // OUTPUT wave is i=0,j=0 plane
	this.ycent[0][0] = this.height/2 ;

	this.xcent[0][1] = this.parabola_vertex - this.parabola_F * this.scale ; // INPUT wave is i=0,j=1 circular
	this.ycent[0][1] = this.height/2 ;
    }

    if ( this.boundary_type == 5 ) { // reflection off convex mirror
	this.a_parabola = this.parabola_coeff / this.scale ; // in pix^-1
	this.parabola_vertex = (3/4) * this.width ; // in pix

	this.xcent[0][1] = this.parabola_vertex + this.parabola_F * this.scale ;
	this.ycent[0][1] = this.height/2 ;
    }

    if ( this.wave_interaction_type == 4 ) { // absorption
	this.xcent[0][1] = this.xcent[0][0] ;
	this.ycent[0][1] = this.ycent[0][0] ;
    }

    if ( this.wave_interaction_type == 2 ) { // refraction
	if ( this.boundary_type == 1 || this.boundary_type == 3 || this.boundary_type == 6 ) { // 
	    this.xcent[0][1] =  this.xcent[0][0]+(5/8)*(this.width-this.xcent[0][0]) ; 
	    this.ycent[0][1] = this.ycent[0][0] ;
	}
    }

// Set up time delays
    this.timedelay = new Array() ;
    for ( var i=0 ; i<this.numwave ; i+=1 ) {
	this.timedelay[i] = new Array() ;
	for ( var j=0 ; j<=this.numimage ; j+=1 ) {
	    if ( this.wave_interaction_type == 6 ) { // Doppler
		this.timedelay[i][j] = 0.5 * i ;
		this.timedelay[i][j] = 1.0 * i ;
	    } else if ( this.wave_interaction_type == 3 ) { 
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else {
		    this.timedelay[i][j] = ( (this.xcent[i][j]-this.xcent[0][0])/this.scale ) / (this.frequency * this.wavelength) ;
		}
	    } else if ( this.boundary_type == 4 && this.waveform_type == 0 ) {  // concave mirror, input plane wave 
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else if ( j == 1 ) {  // reflected wave moving toward the focus
// Time delay from plane wave's beginning to the vertex of the concave mirror
		    this.timedelay[i][j] = (  (this.parabola_vertex - this.xcent[0][0] )/this.scale ) / (this.frequency * this.wavelength) ; 
		} else if ( j == 2 ) {  // reflected wave that has moved past the focus
		    this.timedelay[i][j] = ( ( (this.parabola_vertex - this.xcent[i][0] ) + (this.parabola_vertex - this.xcent[i][j]) )/this.scale ) / (this.frequency * this.wavelength) ;
		}
	    } else if ( this.boundary_type == 4 && this.waveform_type == 1 ) {  // concave mirror, input circular wave 
		this.timedelay[i][j] = 0 ;
	    } else if ( this.boundary_type == 5 ) {  // convex mirror
		if ( j == 0 ) {
		    this.timedelay[i][j] = 0 ;
		} else if ( j == 1 ) {  // reflected wave moving toward the focus
		    this.timedelay[i][j] = ( ( (this.parabola_vertex - this.xcent[0][0]) - (this.xcent[0][j] - this.parabola_vertex) )/this.scale ) / (this.frequency * this.wavelength) ;
		} 
	    } else {
		this.timedelay[i][j] = 0 ;
	    }
	}
    }

}


