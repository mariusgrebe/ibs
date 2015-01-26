Ext.define('CountdownApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',


    requires: [
        'Ext.TitleBar',
    ],

    config: {
        tabBarPosition: 'bottom',
        
	items: [ {
		title: 'Countdown',
		iconCls: 'time',
		styleHtmlContent: true,
		scrollable: true,
		layout: {
			type: 'vbox',
			pack: 'center',
			align: 'center',
		},

		
		items: [ {
				docked:'top',
				xtype: 'titlebar',
				title: 'Countdown',
			},
			{
				xtype: 'audio',
				id: 'audio',
				hidden: true,
				url: 'countdown.wav',
			},
			{
				xtype: 'fieldset',
				width: '100%',
				height: '270px',
				defaults: {
					labelWidth: '65px',
					labelAlign: 'left',
				},
				items: [ {
						xtype: 'sliderfield',
						id: 'sliderminutes',
						value: 10,
						minValue: 1,
						maxValue: 20,
						increment: 1,
						label: 'Minutes',
						listeners: {
								change: function(slider, thumb, oldValue ,minutes) {
									if (minutes < 10) {
										Ext.getCmp("labeltime").setHtml("<span id='time'>0" + minutes + ":00</span></span id='finalcountdown'></span>");
									} else {
										Ext.getCmp("labeltime").setHtml("<span id='time'>" + minutes + ":00</span></span id='finalcountdown'></span>");
									}
								},
								drag: function(slider, thumb, oldValue, minutes){
									if (minutes < 10) {
										Ext.getCmp("labeltime").setHtml("<span id='time'>0" + minutes + ":00</span></span id='finalcountdown'></span>");
									} else {
										Ext.getCmp("labeltime").setHtml("<span id='time'>" + minutes + ":00</span></span id='finalcountdown'></span>");
									}
								},
							},
					},
					{
						xtype: 'container',
						layout: {
							type: 'hbox',
						},
						items: [
							{
								xtype: 'button',
								id: 'startbutton',
								text: 'Start',
								width: '33%',
								margin: '35 3 20 10',
								ui: 'round',
							},
							{
								xtype: 'button',
								id: 'pausebutton',
								text: 'Pause',
								width: '34%',
								margin: '35 3 20 3',
								ui: 'round',
							},
							{
								xtype: 'button',
								id: 'stopbutton',
								text: 'Stop',
								width: '33%',
								margin: '35 10 20 3',
								ui: 'round',
							}
						]
					},
					{
						xtype: 'container',
						layout: {
							type: 'vbox',
							pack: 'center',
							align: 'center',
							},
						items: {
							xtype: 'label',
							id: 'labeltime',
							html: "<span id='time'>10:00</span>",
						}
					}
				]
			}
			
		]
    	}]
    }
	
});
