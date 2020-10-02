/**
 * @file cypress/tests/docs/learning-ojs/introduction.spec.js
 *
 * Copyright (c) 2014-2019 Simon Fraser University
 * Copyright (c) 2000-2019 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 */

describe('Documentation suite tests', function() {
	it('Generates screenshots for the Introduction Chapter', function() {
        // Login as an admin user
        cy.login('admin', 'admin');
        cy.get('a[id^="pkpDropdown1"]').click();
        cy.screenshot('learning-ojs-3-ojs3-interface.png', {capture: 'viewport'});
    })
})