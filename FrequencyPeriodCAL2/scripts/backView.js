function backView(canvas){
	
var ctx = canvas.getContext("2d");

      draw(ctx);
   

    function draw(ctx) {

      // title/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(980.0, 25.0);
      ctx.lineTo(0.0, 25.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(980.0, 0.0);
      ctx.lineTo(980.0, 25.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();

      // title/Frequency and period calculator
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillStyle = "rgb(45, 48, 144)";
      ctx.fillText("Frequency and period", 71, 21);
      ctx.restore();

      // entryBoxes/
      ctx.save();
      ctx.restore();

      // equationTNR60ptItalics/Group
      ctx.save();

      // equationTNR60ptItalics/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(250.6, 166.2);
      ctx.lineTo(293.7, 166.2);
      ctx.lineWidth = 0.6;
      ctx.lineCap = "square";
      ctx.stroke();

      // equationTNR60ptItalics/Group/1
      ctx.font = "60.0px 'Times New Roman'";
      ctx.save();
      ctx.transform(1.000, 0.000, 0.000, 1.000, 257.1, 143.4);
      ctx.fillText("1", 0, 0);
      ctx.restore();

      // equationTNR60ptItalics/Group/f
      ctx.font = "Italic 60.0px 'Times New Roman'";
      ctx.save();
      ctx.transform(1.000, 0.000, 0.000, 1.000, 158.7, 181.2);
      ctx.fillText("f", 0, 0);
      ctx.restore();

      // equationTNR60ptItalics/Group/T
      ctx.save();
      ctx.transform(1.000, 0.000, 0.000, 1.000, 250.5, 228.1);
      ctx.fillText("T", 0, 0);
      ctx.restore();

      // equationTNR60ptItalics/Group/
      ctx.font = " 60.0px 'SymbolMT'";
      ctx.save();
      ctx.transform(1.000, 0.000, 0.000, 1.000, 202.7, 181.2);
      ctx.fillText("=", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // equalsButton/Group
      ctx.save();

      // equalsButton/Group/Glass Button Aqua
      ctx.save();
      ctx.save();
      ctx.transform(1.332, 0.000, 0.000, 1.332, 217.6, 168.8);

      ctx.restore();

      // equalsButton/Group/Group

      // equalsButton/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // equalsButton/Group/Group/Compound Path/Path
      ctx.moveTo(205.4, 163.9);
      ctx.lineTo(205.4, 160.1);
      ctx.lineTo(232.2, 160.1);
      ctx.lineTo(232.2, 163.9);
      ctx.lineTo(205.4, 163.9);
      ctx.closePath();

      // equalsButton/Group/Group/Compound Path/Path
      ctx.moveTo(205.4, 170.4);
      ctx.lineTo(205.4, 166.6);
      ctx.lineTo(232.2, 166.6);
      ctx.lineTo(232.2, 170.4);
      ctx.lineTo(205.4, 170.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // quantitiesAndUnits/T
      ctx.save();

      // Solve for variable over pull-down menu
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("Solve for:", 20, 300);

      ctx.font = "Italic 21.0px 'Times New Roman'";
      ctx.fillText("T", 375, 269.7);

      // quantitiesAndUnits/seconds s
      ctx.font = "18.0px 'Arial'";
      ctx.fillText("(seconds, s)", 330, 292.5);

      // quantitiesAndUnits/f
      ctx.font = "Italic 21.0px 'Times New Roman'";
      ctx.fillText("f", 60.4, 197.9);

      // quantitiesAndUnits/hertz Hz
      ctx.font = "18.0px 'Arial'";
      ctx.fillText("(hertz, Hz)", 22.7, 220.8);

      // quantitiesAndUnits/Period
      ctx.font = "24.0px 'Arial'";
      ctx.fillStyle = "rgb(26, 116, 186)";
      ctx.fillText("Period", 345, 205.1);

      // quantitiesAndUnits/Frequency
      ctx.fillText("Frequency", 8.0, 133.4);
      ctx.restore();
      
            var alpha = ctx.globalAlpha;

      // ergopediaLogo/Group
      ctx.save();

      // ergopediaLogo/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(4.0, 22.1);
      ctx.lineTo(5.1, 22.2);
      ctx.bezierCurveTo(5.0, 22.7, 4.7, 23.0, 4.4, 23.2);
      ctx.bezierCurveTo(4.1, 23.4, 3.7, 23.5, 3.2, 23.5);
      ctx.bezierCurveTo(2.5, 23.5, 1.9, 23.3, 1.6, 22.8);
      ctx.bezierCurveTo(1.3, 22.4, 1.2, 21.9, 1.2, 21.3);
      ctx.bezierCurveTo(1.2, 20.6, 1.3, 20.0, 1.7, 19.6);
      ctx.bezierCurveTo(2.1, 19.2, 2.6, 19.0, 3.1, 19.0);
      ctx.bezierCurveTo(3.8, 19.0, 4.3, 19.2, 4.6, 19.7);
      ctx.bezierCurveTo(5.0, 20.1, 5.2, 20.7, 5.2, 21.6);
      ctx.lineTo(2.3, 21.6);
      ctx.bezierCurveTo(2.3, 21.9, 2.4, 22.2, 2.6, 22.4);
      ctx.bezierCurveTo(2.8, 22.6, 3.0, 22.7, 3.3, 22.7);
      ctx.bezierCurveTo(3.4, 22.7, 3.6, 22.6, 3.7, 22.5);
      ctx.bezierCurveTo(3.8, 22.4, 3.9, 22.3, 4.0, 22.1);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(4.0, 20.9);
      ctx.bezierCurveTo(4.0, 20.6, 4.0, 20.3, 3.8, 20.2);
      ctx.bezierCurveTo(3.6, 20.0, 3.4, 19.9, 3.2, 19.9);
      ctx.bezierCurveTo(3.0, 19.9, 2.7, 20.0, 2.6, 20.2);
      ctx.bezierCurveTo(2.4, 20.3, 2.3, 20.6, 2.3, 20.9);
      ctx.lineTo(4.0, 20.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(7.4, 23.4);
      ctx.lineTo(6.2, 23.4);
      ctx.lineTo(6.2, 19.1);
      ctx.lineTo(7.3, 19.1);
      ctx.lineTo(7.3, 19.7);
      ctx.bezierCurveTo(7.5, 19.4, 7.6, 19.3, 7.8, 19.2);
      ctx.bezierCurveTo(7.9, 19.1, 8.1, 19.0, 8.3, 19.0);
      ctx.bezierCurveTo(8.5, 19.0, 8.8, 19.1, 9.0, 19.2);
      ctx.lineTo(8.7, 20.2);
      ctx.bezierCurveTo(8.5, 20.1, 8.3, 20.0, 8.1, 20.0);
      ctx.bezierCurveTo(8.0, 20.0, 7.8, 20.1, 7.7, 20.2);
      ctx.bezierCurveTo(7.6, 20.3, 7.5, 20.4, 7.5, 20.7);
      ctx.bezierCurveTo(7.4, 20.9, 7.4, 21.4, 7.4, 22.1);
      ctx.lineTo(7.4, 23.4);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(9.6, 23.7);
      ctx.lineTo(10.9, 23.9);
      ctx.bezierCurveTo(10.9, 24.0, 10.9, 24.1, 11.0, 24.2);
      ctx.bezierCurveTo(11.1, 24.3, 11.3, 24.3, 11.5, 24.3);
      ctx.bezierCurveTo(11.8, 24.3, 12.0, 24.3, 12.2, 24.2);
      ctx.bezierCurveTo(12.3, 24.1, 12.4, 24.0, 12.4, 23.9);
      ctx.bezierCurveTo(12.5, 23.8, 12.5, 23.6, 12.5, 23.4);
      ctx.lineTo(12.5, 22.7);
      ctx.bezierCurveTo(12.1, 23.2, 11.7, 23.4, 11.2, 23.4);
      ctx.bezierCurveTo(10.6, 23.4, 10.1, 23.2, 9.8, 22.7);
      ctx.bezierCurveTo(9.5, 22.3, 9.4, 21.8, 9.4, 21.2);
      ctx.bezierCurveTo(9.4, 20.5, 9.6, 20.0, 9.9, 19.6);
      ctx.bezierCurveTo(10.3, 19.2, 10.7, 19.0, 11.2, 19.0);
      ctx.bezierCurveTo(11.8, 19.0, 12.2, 19.3, 12.5, 19.7);
      ctx.lineTo(12.5, 19.1);
      ctx.lineTo(13.6, 19.1);
      ctx.lineTo(13.6, 23.0);
      ctx.bezierCurveTo(13.6, 23.5, 13.6, 23.9, 13.5, 24.1);
      ctx.bezierCurveTo(13.4, 24.4, 13.3, 24.6, 13.1, 24.7);
      ctx.bezierCurveTo(13.0, 24.9, 12.8, 25.0, 12.5, 25.0);
      ctx.bezierCurveTo(12.3, 25.1, 12.0, 25.2, 11.6, 25.2);
      ctx.bezierCurveTo(10.8, 25.2, 10.3, 25.0, 10.0, 24.8);
      ctx.bezierCurveTo(9.7, 24.5, 9.6, 24.2, 9.6, 23.8);
      ctx.bezierCurveTo(9.6, 23.8, 9.6, 23.8, 9.6, 23.7);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(10.6, 21.2);
      ctx.bezierCurveTo(10.6, 21.6, 10.7, 22.0, 10.8, 22.2);
      ctx.bezierCurveTo(11.0, 22.4, 11.2, 22.5, 11.5, 22.5);
      ctx.bezierCurveTo(11.8, 22.5, 12.0, 22.4, 12.2, 22.2);
      ctx.bezierCurveTo(12.4, 22.0, 12.5, 21.6, 12.5, 21.2);
      ctx.bezierCurveTo(12.5, 20.8, 12.4, 20.4, 12.2, 20.2);
      ctx.bezierCurveTo(12.0, 20.0, 11.8, 19.9, 11.5, 19.9);
      ctx.bezierCurveTo(11.2, 19.9, 11.0, 20.0, 10.8, 20.2);
      ctx.bezierCurveTo(10.7, 20.4, 10.6, 20.7, 10.6, 21.2);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(14.6, 21.2);
      ctx.bezierCurveTo(14.6, 20.8, 14.7, 20.5, 14.9, 20.1);
      ctx.bezierCurveTo(15.1, 19.8, 15.4, 19.5, 15.7, 19.3);
      ctx.bezierCurveTo(16.1, 19.1, 16.4, 19.0, 16.9, 19.0);
      ctx.bezierCurveTo(17.5, 19.0, 18.0, 19.2, 18.5, 19.7);
      ctx.bezierCurveTo(18.9, 20.1, 19.1, 20.6, 19.1, 21.3);
      ctx.bezierCurveTo(19.1, 21.9, 18.9, 22.4, 18.4, 22.9);
      ctx.bezierCurveTo(18.0, 23.3, 17.5, 23.5, 16.9, 23.5);
      ctx.bezierCurveTo(16.5, 23.5, 16.1, 23.4, 15.7, 23.3);
      ctx.bezierCurveTo(15.4, 23.1, 15.1, 22.8, 14.9, 22.5);
      ctx.bezierCurveTo(14.7, 22.1, 14.6, 21.7, 14.6, 21.2);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(15.8, 21.3);
      ctx.bezierCurveTo(15.8, 21.7, 15.9, 22.0, 16.1, 22.3);
      ctx.bezierCurveTo(16.3, 22.5, 16.6, 22.6, 16.9, 22.6);
      ctx.bezierCurveTo(17.2, 22.6, 17.4, 22.5, 17.6, 22.3);
      ctx.bezierCurveTo(17.8, 22.0, 17.9, 21.7, 17.9, 21.3);
      ctx.bezierCurveTo(17.9, 20.8, 17.8, 20.5, 17.6, 20.3);
      ctx.bezierCurveTo(17.4, 20.1, 17.2, 20.0, 16.9, 20.0);
      ctx.bezierCurveTo(16.6, 20.0, 16.3, 20.1, 16.1, 20.3);
      ctx.bezierCurveTo(15.9, 20.5, 15.8, 20.8, 15.8, 21.3);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(20.1, 19.1);
      ctx.lineTo(21.2, 19.1);
      ctx.lineTo(21.2, 19.8);
      ctx.bezierCurveTo(21.3, 19.5, 21.5, 19.4, 21.7, 19.2);
      ctx.bezierCurveTo(22.0, 19.1, 22.2, 19.0, 22.5, 19.0);
      ctx.bezierCurveTo(23.0, 19.0, 23.4, 19.2, 23.8, 19.6);
      ctx.bezierCurveTo(24.1, 20.0, 24.3, 20.5, 24.3, 21.2);
      ctx.bezierCurveTo(24.3, 22.0, 24.1, 22.5, 23.8, 22.9);
      ctx.bezierCurveTo(23.4, 23.3, 23.0, 23.5, 22.5, 23.5);
      ctx.bezierCurveTo(22.3, 23.5, 22.0, 23.5, 21.9, 23.4);
      ctx.bezierCurveTo(21.7, 23.3, 21.5, 23.1, 21.2, 22.9);
      ctx.lineTo(21.2, 25.1);
      ctx.lineTo(20.1, 25.1);
      ctx.lineTo(20.1, 19.1);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(21.2, 21.2);
      ctx.bezierCurveTo(21.2, 21.7, 21.3, 22.0, 21.5, 22.3);
      ctx.bezierCurveTo(21.7, 22.5, 21.9, 22.6, 22.2, 22.6);
      ctx.bezierCurveTo(22.5, 22.6, 22.7, 22.5, 22.9, 22.3);
      ctx.bezierCurveTo(23.1, 22.1, 23.1, 21.7, 23.1, 21.3);
      ctx.bezierCurveTo(23.1, 20.8, 23.1, 20.5, 22.9, 20.3);
      ctx.bezierCurveTo(22.7, 20.0, 22.5, 19.9, 22.2, 19.9);
      ctx.bezierCurveTo(21.9, 19.9, 21.7, 20.0, 21.5, 20.2);
      ctx.bezierCurveTo(21.3, 20.5, 21.2, 20.8, 21.2, 21.2);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(27.9, 22.1);
      ctx.lineTo(29.0, 22.2);
      ctx.bezierCurveTo(28.9, 22.7, 28.6, 23.0, 28.3, 23.2);
      ctx.bezierCurveTo(28.0, 23.4, 27.6, 23.5, 27.1, 23.5);
      ctx.bezierCurveTo(26.4, 23.5, 25.8, 23.3, 25.5, 22.8);
      ctx.bezierCurveTo(25.2, 22.4, 25.0, 21.9, 25.0, 21.3);
      ctx.bezierCurveTo(25.0, 20.6, 25.2, 20.0, 25.6, 19.6);
      ctx.bezierCurveTo(26.0, 19.2, 26.4, 19.0, 27.0, 19.0);
      ctx.bezierCurveTo(27.7, 19.0, 28.2, 19.2, 28.5, 19.7);
      ctx.bezierCurveTo(28.9, 20.1, 29.1, 20.7, 29.1, 21.6);
      ctx.lineTo(26.2, 21.6);
      ctx.bezierCurveTo(26.2, 21.9, 26.3, 22.2, 26.5, 22.4);
      ctx.bezierCurveTo(26.7, 22.6, 26.9, 22.7, 27.1, 22.7);
      ctx.bezierCurveTo(27.3, 22.7, 27.5, 22.6, 27.6, 22.5);
      ctx.bezierCurveTo(27.7, 22.4, 27.8, 22.3, 27.9, 22.1);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(27.9, 20.9);
      ctx.bezierCurveTo(27.9, 20.6, 27.8, 20.3, 27.7, 20.2);
      ctx.bezierCurveTo(27.5, 20.0, 27.3, 19.9, 27.1, 19.9);
      ctx.bezierCurveTo(26.8, 19.9, 26.6, 20.0, 26.5, 20.2);
      ctx.bezierCurveTo(26.3, 20.3, 26.2, 20.6, 26.2, 20.9);
      ctx.lineTo(27.9, 20.9);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(34.1, 23.4);
      ctx.lineTo(33.0, 23.4);
      ctx.lineTo(33.0, 22.8);
      ctx.bezierCurveTo(32.9, 23.0, 32.7, 23.2, 32.4, 23.3);
      ctx.bezierCurveTo(32.2, 23.5, 31.9, 23.5, 31.7, 23.5);
      ctx.bezierCurveTo(31.2, 23.5, 30.8, 23.3, 30.4, 22.9);
      ctx.bezierCurveTo(30.1, 22.5, 29.9, 22.0, 29.9, 21.3);
      ctx.bezierCurveTo(29.9, 20.5, 30.1, 20.0, 30.4, 19.6);
      ctx.bezierCurveTo(30.8, 19.2, 31.2, 19.0, 31.7, 19.0);
      ctx.bezierCurveTo(32.2, 19.0, 32.6, 19.2, 33.0, 19.6);
      ctx.lineTo(33.0, 17.5);
      ctx.lineTo(34.1, 17.5);
      ctx.lineTo(34.1, 23.4);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(31.1, 21.2);
      ctx.bezierCurveTo(31.1, 21.6, 31.1, 22.0, 31.2, 22.2);
      ctx.bezierCurveTo(31.4, 22.5, 31.7, 22.6, 32.0, 22.6);
      ctx.bezierCurveTo(32.3, 22.6, 32.5, 22.5, 32.7, 22.3);
      ctx.bezierCurveTo(32.9, 22.1, 33.0, 21.7, 33.0, 21.3);
      ctx.bezierCurveTo(33.0, 20.8, 32.9, 20.4, 32.7, 20.2);
      ctx.bezierCurveTo(32.5, 20.0, 32.3, 19.9, 32.0, 19.9);
      ctx.bezierCurveTo(31.7, 19.9, 31.5, 20.0, 31.3, 20.2);
      ctx.bezierCurveTo(31.2, 20.4, 31.1, 20.8, 31.1, 21.2);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(35.4, 18.5);
      ctx.lineTo(35.4, 17.5);
      ctx.lineTo(36.5, 17.5);
      ctx.lineTo(36.5, 18.5);
      ctx.lineTo(35.4, 18.5);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(35.4, 23.4);
      ctx.lineTo(35.4, 19.1);
      ctx.lineTo(36.5, 19.1);
      ctx.lineTo(36.5, 23.4);
      ctx.lineTo(35.4, 23.4);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Group/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(38.7, 20.4);
      ctx.lineTo(37.7, 20.2);
      ctx.bezierCurveTo(37.8, 19.8, 38.0, 19.5, 38.3, 19.3);
      ctx.bezierCurveTo(38.6, 19.1, 39.0, 19.0, 39.5, 19.0);
      ctx.bezierCurveTo(40.0, 19.0, 40.4, 19.1, 40.7, 19.2);
      ctx.bezierCurveTo(40.9, 19.3, 41.1, 19.5, 41.2, 19.7);
      ctx.bezierCurveTo(41.3, 19.8, 41.4, 20.2, 41.4, 20.7);
      ctx.lineTo(41.3, 22.0);
      ctx.bezierCurveTo(41.3, 22.4, 41.4, 22.7, 41.4, 22.8);
      ctx.bezierCurveTo(41.4, 23.0, 41.5, 23.2, 41.6, 23.4);
      ctx.lineTo(40.5, 23.4);
      ctx.bezierCurveTo(40.4, 23.3, 40.4, 23.2, 40.4, 23.1);
      ctx.bezierCurveTo(40.3, 23.0, 40.3, 23.0, 40.3, 23.0);
      ctx.bezierCurveTo(40.1, 23.1, 39.9, 23.3, 39.7, 23.4);
      ctx.bezierCurveTo(39.5, 23.5, 39.2, 23.5, 39.0, 23.5);
      ctx.bezierCurveTo(38.5, 23.5, 38.2, 23.4, 37.9, 23.2);
      ctx.bezierCurveTo(37.7, 22.9, 37.6, 22.6, 37.6, 22.2);
      ctx.bezierCurveTo(37.6, 22.0, 37.6, 21.8, 37.7, 21.6);
      ctx.bezierCurveTo(37.8, 21.4, 38.0, 21.3, 38.2, 21.2);
      ctx.bezierCurveTo(38.4, 21.1, 38.7, 21.0, 39.1, 20.9);
      ctx.bezierCurveTo(39.7, 20.8, 40.0, 20.7, 40.2, 20.6);
      ctx.lineTo(40.2, 20.5);
      ctx.bezierCurveTo(40.2, 20.3, 40.2, 20.1, 40.1, 20.0);
      ctx.bezierCurveTo(40.0, 19.9, 39.8, 19.9, 39.5, 19.9);
      ctx.bezierCurveTo(39.3, 19.9, 39.1, 19.9, 39.0, 20.0);
      ctx.bezierCurveTo(38.9, 20.1, 38.8, 20.2, 38.7, 20.4);
      ctx.closePath();

      // ergopediaLogo/Group/Compound Path/Path
      ctx.moveTo(40.2, 21.4);
      ctx.bezierCurveTo(40.1, 21.4, 39.9, 21.5, 39.5, 21.5);
      ctx.bezierCurveTo(39.2, 21.6, 39.0, 21.7, 38.9, 21.7);
      ctx.bezierCurveTo(38.8, 21.8, 38.7, 22.0, 38.7, 22.1);
      ctx.bezierCurveTo(38.7, 22.3, 38.8, 22.4, 38.9, 22.5);
      ctx.bezierCurveTo(39.0, 22.7, 39.1, 22.7, 39.3, 22.7);
      ctx.bezierCurveTo(39.5, 22.7, 39.7, 22.7, 39.9, 22.5);
      ctx.bezierCurveTo(40.1, 22.4, 40.1, 22.3, 40.2, 22.1);
      ctx.bezierCurveTo(40.2, 22.0, 40.2, 21.9, 40.2, 21.6);
      ctx.lineTo(40.2, 21.4);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(30.9, 17.0);
      ctx.lineTo(1.5, 17.0);
      ctx.lineTo(1.5, 1.0);
      ctx.lineTo(30.9, 1.0);
      ctx.lineTo(30.9, 17.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // ergopediaLogo/Compound Path
      ctx.beginPath();

      // ergopediaLogo/Compound Path/Path
      ctx.moveTo(27.8, 4.0);
      ctx.lineTo(27.8, 5.7);
      ctx.lineTo(24.8, 5.7);
      ctx.lineTo(24.5, 9.1);
      ctx.bezierCurveTo(24.5, 9.7, 24.4, 10.2, 24.4, 10.7);
      ctx.bezierCurveTo(24.4, 11.7, 24.6, 12.4, 24.9, 12.6);
      ctx.bezierCurveTo(25.1, 12.8, 25.5, 12.9, 25.9, 12.9);
      ctx.bezierCurveTo(26.7, 12.9, 27.2, 12.5, 27.3, 11.6);
      ctx.lineTo(27.8, 11.6);
      ctx.bezierCurveTo(27.5, 13.7, 26.6, 14.7, 24.9, 14.7);
      ctx.bezierCurveTo(24.2, 14.7, 23.6, 14.5, 23.1, 14.1);
      ctx.bezierCurveTo(22.7, 13.7, 22.4, 13.1, 22.4, 12.3);
      ctx.bezierCurveTo(22.4, 11.8, 22.5, 10.6, 22.7, 8.9);
      ctx.lineTo(23.0, 5.7);
      ctx.lineTo(20.3, 5.7);
      ctx.bezierCurveTo(20.1, 8.4, 19.9, 10.4, 19.7, 11.7);
      ctx.bezierCurveTo(19.4, 13.0, 19.1, 13.8, 18.8, 14.2);
      ctx.bezierCurveTo(18.5, 14.5, 18.1, 14.7, 17.6, 14.7);
      ctx.bezierCurveTo(17.2, 14.7, 16.9, 14.6, 16.6, 14.4);
      ctx.bezierCurveTo(16.3, 14.2, 16.2, 13.9, 16.2, 13.6);
      ctx.bezierCurveTo(16.2, 13.3, 16.4, 12.9, 16.9, 12.3);
      ctx.bezierCurveTo(17.6, 11.5, 18.1, 10.7, 18.4, 9.8);
      ctx.bezierCurveTo(18.7, 8.9, 19.0, 7.6, 19.2, 5.7);
      ctx.lineTo(18.3, 5.7);
      ctx.bezierCurveTo(17.6, 5.7, 17.0, 5.8, 16.7, 6.1);
      ctx.bezierCurveTo(16.3, 6.4, 15.9, 6.8, 15.6, 7.3);
      ctx.lineTo(15.1, 7.3);
      ctx.bezierCurveTo(15.4, 6.5, 15.7, 5.8, 16.1, 5.3);
      ctx.bezierCurveTo(16.5, 4.7, 16.9, 4.4, 17.3, 4.3);
      ctx.bezierCurveTo(17.7, 4.1, 18.5, 4.0, 19.5, 4.0);
      ctx.lineTo(27.8, 4.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // ergopediaLogo/Path
      ctx.beginPath();
      ctx.moveTo(14.2, 12.2);
      ctx.bezierCurveTo(13.2, 13.4, 12.0, 14.0, 10.5, 14.0);
      ctx.bezierCurveTo(9.5, 14.0, 8.7, 13.7, 8.0, 13.0);
      ctx.bezierCurveTo(7.3, 12.4, 7.0, 11.3, 7.0, 9.8);
      ctx.lineTo(7.0, 9.4);
      ctx.lineTo(11.2, 9.4);
      ctx.lineTo(11.2, 8.4);
      ctx.lineTo(7.1, 8.4);
      ctx.bezierCurveTo(7.3, 7.2, 7.6, 6.2, 8.2, 5.5);
      ctx.bezierCurveTo(8.8, 4.8, 9.5, 4.4, 10.4, 4.4);
      ctx.bezierCurveTo(11.2, 4.4, 11.8, 4.7, 12.4, 5.2);
      ctx.bezierCurveTo(12.9, 5.8, 13.2, 6.5, 13.3, 7.2);
      ctx.lineTo(13.8, 7.2);
      ctx.lineTo(13.8, 4.0);
      ctx.lineTo(13.3, 4.0);
      ctx.bezierCurveTo(13.2, 4.2, 13.0, 4.2, 12.8, 4.2);
      ctx.bezierCurveTo(12.7, 4.2, 12.3, 4.2, 11.9, 4.0);
      ctx.bezierCurveTo(11.1, 3.8, 10.4, 3.7, 9.9, 3.7);
      ctx.bezierCurveTo(8.5, 3.7, 7.3, 4.2, 6.2, 5.2);
      ctx.bezierCurveTo(5.1, 6.2, 4.6, 7.5, 4.6, 9.1);
      ctx.bezierCurveTo(4.6, 10.6, 5.1, 11.9, 6.2, 13.1);
      ctx.bezierCurveTo(7.2, 14.2, 8.6, 14.7, 10.3, 14.7);
      ctx.bezierCurveTo(12.0, 14.7, 13.4, 13.9, 14.6, 12.4);
      ctx.lineTo(14.2, 12.2);
      ctx.closePath();
      ctx.fill();

      // ergopediaLogo/TM
      ctx.font = "Bold 2.0px 'Arial'";
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fillText("TM", 42.5, 23.4);

      // ergopediaLogo/Path
      ctx.globalAlpha = alpha * 0.00;
      ctx.beginPath();
      ctx.moveTo(0.0, 0.0);
      ctx.lineTo(1.0, 0.0);
      ctx.lineTo(1.0, 1.0);
      ctx.lineTo(0.0, 1.0);
      ctx.lineTo(0.0, 0.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();

      
    }

}
