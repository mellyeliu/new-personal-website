#include <cmsis_os2.h>
#include "general.h"
#include <string.h>


// add any #includes here

// add any #defines here

// add global variables here
int n;
int m;
int r;
bool loyal[];
osMessageQueueId_t msgQ;


/** Record parameters and set up any OS and other resources
  * needed by your general() and broadcast() functions.
  * nGeneral: number of generals
  * loyal: array representing loyalty of corresponding generals
  * reporter: general that will generate output
  * return true if setup successful and n > 3*m, false otherwise
  */
bool setup(uint8_t nGeneral, bool loyal[], uint8_t reporter) {
	int traitor_count = 0;
	for(int i=0; i< sizeof loyal/ sizeof *loyal; i++){
		if (loyal[i] == false) {
			traitor_count ++;
		} 
	}
	printf("Traitors: %d", traitor_count);
	if (nGeneral <= 3 * traitor_count) {
		printf("assertion 'n > 3*m failed");
		return false;
	}
	return true;
}


/** Delete any OS resources created by setup() and free any memory
  * dynamically allocated by setup().
  */
void cleanup(void) {
}


/** This function performs the initial broadcast to n-1 generals.
  * It should wait for the generals to finish before returning.
  * Note that the general sending the command does not participate
  * in the OM algorithm.
  * command: either 'A' or 'R'
  * sender: general sending the command to other n-1 generals
  */
void broadcast(char command, uint8_t commander) {
	// value, sender
	// send message to general
}


/** Generals are created before each test and deleted after each
  * test.  The function should wait for a value from broadcast()
  * and then use the OM algorithm to solve the Byzantine General's
  * Problem.  The general designated as reporter in setup()
  * should output the messages received in OM(0).
  * idPtr: pointer to general's id number which is in [0,n-1]
  */
void general(void *idPtr) {
 	uint8_t id = *(uint8_t *)idPtr;
	// get message from broadcast, 
}

void om(int m, char *msg, int id) {
	if (m == 0) {
		if (id == r) {
			printf(msg);
		}
		} else if (m > 0) {
			// join id and msg strings together strcat(msg, id)
			// send to generals g0 g1 g2 g3
			// examine string for generals to send to - strstr(const char *haystack, const char *needle eg. "1:")
			// check loyal array to check prepending
			// recv msgs from other generals (based on level of recursion)
			//// for each recvd msg, 
			/////// om (m-1, rm, id
		}
}
