/** @file      display.h
 * @brief      A silly file for printing messages
 * @details    This simply wraps a call to printf() and provides a couple of 
 * predefined strings to use as messages.
 * @author     TM
 * @copyright  MIT License, see repository LICENSE file
 */
 
#ifndef DISPLAY_H_
#define DISPLAY_H_

#include <stdlib.h>

/** @defgroup disply Display
 * @details This provides a silly way to display messages.
 * @pre There are no prerequisites.
 * @{
 */
#ifdef __cplusplus
	extern "C" {
#endif

#define HELLO_WORLD    "Hello world!" /**< A hello world strgin. */
#define GOODBYE_WORLD  "Goodbye cruel world" /**< A goodbye world string. */

/** @brief   A silly function that wraps printf()
 * @details  This is simply to allow a demonstration of the doxygen markup for 
 * documenting functions.
 * @param    message  A string that is to be displayed.
 * @return   Always returns EXIT_SUCCESS if completed without error.
 */
int displayMessage(char * message);

#ifdef __cplusplus
	}
#endif

/** @} */

#endif
