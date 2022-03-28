/**
 * This script adds a row of input for materials without the price field
 */

$(function(){
	$("#madd_row").on("click", function() {
		let nextMatId = parseInt(document.getElementById("nextMatId").value);
	    let row = document.createElement("DIV");
	    row.setAttribute("id", "mat_row"+nextMatId);
	    row.classList.add("row");
	    
	    //Material Column
	    let mCol = document.createElement("DIV");
	    mCol.classList.add("col-xs-7", "col-sm-7", "pad_right_5");
	    let mInput = document.createElement("input");
	    mInput.classList.add('form-control','input_mat');
	    mInput.setAttribute("type", "text");
	    mInput.setAttribute("id", "mat"+nextMatId);
	    mInput.setAttribute("autocomplete", "off");
	    mInput.setAttribute("name", "mat"+nextMatId);
	    mInput.setAttribute("placeholder", "Material");
	    mInput.required = true;
	    let mColChild = document.createElement("DIV");
	    mColChild.setAttribute("id", "search_mat"+nextMatId);
	    row.appendChild(mCol);
	    mCol.appendChild(mInput);
	    mCol.appendChild(mColChild);
	    
	    
	    //Quantity Column
	    let mQty = document.createElement("DIV");
	    mQty.classList.add("col-xs-3", "col-sm-3", "pad_right_5", "pad_left_none");
	    let qInput = document.createElement("input");
	    qInput.classList.add('form-control');
	    qInput.setAttribute("type", "text");
	    qInput.setAttribute("name", "mqty"+nextMatId);
	    qInput.setAttribute("placeholder", "qty");
	    qInput.required = true;
	    row.appendChild(mQty);
	    mQty.appendChild(qInput);
	    
	    //Delete (X) Column
	    let mDel = document.createElement("DIV");
	    mDel.classList.add("col-xs-2", "col-sm-2", "pad_left_none");
	    let dBtn = document.createElement("a");
	    dBtn.classList.add("mat_del_btn", "btn", "btn-danger", "pull-right", "x_button");
	    dBtn.setAttribute("id", "mdelete"+nextMatId);
	    dBtn.innerHTML = "X";
	    row.appendChild(mDel);
	    mDel.appendChild(dBtn);
	    
	    //Place the new row of input in the material input container
	    document.getElementById("materials_container").appendChild(row);
	    
	    //Increment counter for the next material ID
	    document.getElementById("nextMatId").value = nextMatId+1;
	});
});
