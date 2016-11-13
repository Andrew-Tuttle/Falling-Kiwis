// collaboration statement
//Andrew Tuttle 
//GTID:903110416
//Section A3 
//atuttle7@gatech.edu 
//I worked on the homework assignment alone, using only this semester's course materials.

kiwi_caught = 0;

function process_frame() {
	current_vel = get_truck_velocity()
	if (is_down('b') == true){
		brake_truck();
	}
	else if (is_down('left') == true){
		translate_truck_left();
	}
	else if (is_down('right') == true){
		translate_truck_right();
	}
	else{
		coast_truck();
	}
	compute_truck_position(current_vel);
	if ((Math.random())*100 <= kiwi_rate){
		create_kiwi();
	}
}

function translate_truck_right() {
	// your code here
	if (current_vel < 10){
		set_truck_velocity(current_vel + .2);
	}
}

function translate_truck_left() {
	// your code here
	if (current_vel > -10){
	set_truck_velocity(current_vel - .2);
	}
}

function coast_truck() {
	// your code here
	set_truck_velocity(current_vel*.999);
}

function brake_truck() {
	// your code here
	set_truck_velocity(current_vel*.95);
}

function compute_truck_position(aVel) {
	// your code here
	pos = get_truck_left();
	wall = window.innerWidth;
	if (pos < 0){
		set_truck_velocity(3);
	}
	else if (pos+250 > wall){
		set_truck_velocity(-3);
	}
	set_truck_left(pos+get_truck_velocity());
}


function find_collisions(kiwi) {
	// your code here
	// Explaination:
	// This function finds the x and y coordinates of a kiwi, then
	// checks if the y-coordinate of the kiwi is about the same as the truck bed with a small range as to make the kiwis easier to catch. 
	// It also checks if the kiwi is over the truck bed.
	// If both are true, it increments kiwi_caught by one and sets "kiwi-count" to the new value of kiwi_caught.
	// Finally, it deletes the kiwi if it was both over the truck bed and about the same height as it.
	kiwiX = get_kiwi_x(kiwi);
	kiwiY = get_kiwi_y(kiwi);
	pos = get_truck_left();
	height = window.innerHeight;
	if (kiwiY >= (height-20) && kiwiY < (height)){
		if ((kiwiX > pos) && (kiwiX < (pos + 125))){
		kiwi_caught = kiwi_caught + 1;
		document.getElementById("kiwi-count").innerHTML = kiwi_caught;
		delete_kiwi(kiwi);
		}
	}	
}

function game_over() {
	// your code here
	alert('GAME OVER', 'Congratulations! You have caught '+ kiwi_caught +' kiwi(s)!', 'Start a New Game?');
	kiwi_caught = 0;
	document.getElementById("kiwi-count").innerHTML = 0;
}

// just ignore this (‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌but don't delete it‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌):
check_latest = 2;