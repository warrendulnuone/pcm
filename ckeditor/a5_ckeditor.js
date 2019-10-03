//THERE IS NOTHING TO MODIFY IN THIS FILE. EDIT AT YOUR OWN RISK!!!
//CKEditor V4
//Copyright AlphaToGo, LLC 2014 - NOT licensed for use outside of the AlphaToGo Framework.

////UNIVERSAL////////////////
function ckInstance(ctype,fieldname,compname,toolbar,width,height,customsettings) {

	var compname = compname.toUpperCase()
	var customsettings
	if(customsettings == undefined)
	{
	customsettings = '' ;
	}
	else
	{
	customsettings = customsettings + ","
	}
	var toolbar = toolbar||'Full';//sets the default value
	var height  = height||'' ;// sets the height to editor default 
	var width   = width||'' ;// sets the width to editor default 
	
	switch(ctype)
	{
	case 'GRIDDTL':
	rownum = '.D.V.R1.'
	break;
	case 'GRIDROW':
	rownum = '.V.R1.'
	break;
	case 'GRIDNEW':
	rownum = '.V.R-1.'
	break;
	case 'DIALOG1':
	rownum = '.V.R1.'
	break;
	case 'DIALOG2':
	rownum = '.V.R1.'
	break;
	case 'UX':
	rownum = '.V.R1.'
	break;

	default: 
	alert('Error, incorrect Alpha Component Type defined');
	}

	if(CKEDITOR.instances[compname+rownum+fieldname])
	{
	intRep = "CKEDITOR.replace(compname+rownum+fieldname,{xcustomsettings toolbar:''+toolbar+'',height:''+height+'',width:''+width+'',customConfig:'config_alphafive.js'});"
	intRep = intRep.replace('xcustomsettings',customsettings);
	eval(intRep)
	}
	else
	{

	intRep = "CKEDITOR.replace(compname+rownum+fieldname,{xcustomsettings toolbar:''+toolbar+'',height:''+height+'',width:''+width+'',customConfig:'config_alphafive.js'});"
	intRep = intRep.replace('xcustomsettings',customsettings);
	eval(intRep)
	}
	CKEDITOR.instances[compname+rownum+fieldname].on( 'change', function() {

	switch(ctype)
	{
	case 'GRIDDTL':
	eval(compname+'_GridObj')._setDetailViewState(true);
	break;
	case 'GRIDROW':
	eval(compname+'_GridObj')._setRowState(1,true);
	break;
	case 'GRIDNEW':
	eval(compname+'_GridObj')._setRowState(-1,true);
	break;
	case 'DIALOG1':
	eval(compname+'_DlgObj').setValue('EDITOR_DUMMY',' ');
	break;
	case 'DIALOG2':
	eval(compname+'_DlgObj').setValue('EDITOR_DUMMY',' ');
	break;
	case 'UX':
	eval(compname+'_DlgObj').setValue('EDITOR_DUMMY',' ');
	break;

	default: 
	alert('Error, incorrect Alpha Component Type defined');
	}

	});
}

function ckUpdate(ctype,compname) {

	switch(ctype)
	{

	case 'GRIDDTL':
	rownum = '.D.V.R1.'
	break;

	case 'GRIDROW':
	rownum = '.V.R1.'
	break;

	case 'GRIDNEW':
	rownum = '.V.R-1.'
	break;

	case 'GRIDBLANK':
	rownum = '.V.R-1.'
	break;

	case 'DIALOG1':
	rownum = '.V.R1.'
	break;

	case 'DIALOG2':
	rownum = '.V.R1.'
	break;

	case 'UX':
	rownum = '.V.R1.'
	break;

	default: 
	alert('Error, incorrect Alpha Component Type defined');
	}

	var	compname = compname.toUpperCase()

	for (var name in CKEDITOR.instances)
	{
	var editor_data  = CKEDITOR.instances[name].getData();
	var fname = name.replace(compname+rownum,'');

	switch(ctype)
	{

	case 'GRIDDTL':
	eval(compname+'_GridObj')._setValue('D',fname,editor_data);
	break;

	case 'GRIDROW':
	eval(compname+'_GridObj')._setValue('G',fname,1,editor_data);
	break;

	case 'GRIDNEW':
	eval(compname+'_GridObj')._setValue('G',fname,-1,editor_data);
	break;

	case 'GRIDBLANK':
	var editor_blank = CKEDITOR.instances[name].setData('');
	eval(compname+'_GridObj')._setValue('G',fname,-1,editor_blank);
	break;

	case 'DIALOG1':	
	eval(compname+'_DlgObj').setValue(fname,editor_data);
	break;

	case 'DIALOG2':	
	eval(compname+'_DlgObj').setValue(fname,editor_data);
	break;

	default: 
	alert('Error, incorrect Alpha Component Type defined');
	}
	}
}
