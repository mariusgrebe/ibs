Ext.define('CountdownApp.controller.Main', {
    	extend: 'Ext.app.Controller',
    
    	
    
	init: function() {
		this.minutes = 10;
		this.seconds = 0;
		this.running = false;
		this.paused = false;
		this.task;
    	},

	config: {
        	refs: {
			buttonstart: '#startbutton',
			buttonpause: '#pausebutton',
			buttonstop: '#stopbutton',
        	},
        	control: {
            		buttonstart: {
				tap: "startTimer"
			},
			buttonpause: {
				tap: "pauseTimer"
			},
			buttonstop: {
				tap: "stopTimer"
			}
        	},
    	},

	setLabel: function() {
		var m = "";
		var s = "";

		if (this.seconds < 10) {
			s = "0";
		}
		if (this.minutes < 10) {
			m = "0";
		}

		if (this.minutes === 0 && this.seconds <= 10) {
			Ext.getCmp("labeltime").setHtml("<span id='timefinal'>00:" + s + this.seconds + "</span>");
		} else { 
			Ext.getCmp("labeltime").setHtml("<span id='time'>" + m + this.minutes + ":" + s + this.seconds + "</span>");
		}
	},

	updateTimer: function() {
		this.seconds -= 1;
		if (this.seconds < 0) {
			this.seconds = 59;
			this.minutes -= 1;
			if (this.minutes < 0) {
				Ext.getCmp('audio').play();
				this.stopTimer();
			}
		}
		this.setLabel();
	},


	startTimer: function() {
		if (!this.running && !this.paused) {
			this.running = true;
			this.setTimer(Ext.getCmp("sliderminutes").getValue(), 0);
			var me = this;
			this.task  = setInterval(function(){me.updateTimer();}, 1000);
			Ext.getCmp("sliderminutes").setDisabled(true);
		}
	},

	pauseTimer: function() {
		if (this.running) {
			if (this.paused) {
				this.paused = false;
				var me = this;
				this.task  = setInterval(function(){me.updateTimer();}, 1000);
			} else {
				this.paused = true;
				clearInterval(this.task);
			}
		}
	},

	stopTimer: function() {
		if (this.running) {
			clearInterval(this.task);
			this.running = false;
			this.paused = false;
			Ext.getCmp("sliderminutes").setDisabled(false);
			if (this.minutes < 0) {
				this.setTimer(0, 0);
				return;
			}
		}
		this.setTimer(Ext.getCmp("sliderminutes").getValue(), 0);
	},

	setTimer: function(minutes, seconds) {
		this.minutes = minutes;
		this.seconds = seconds;
		this.setLabel();
	},

	
	
	

});
