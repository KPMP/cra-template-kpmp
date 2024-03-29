import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Directions extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Congrats on creating a new app for KPMP!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Developer TODOs: </h3>
            <ul>
	            <li> Review the common <a href="/designs" target="_blank" rel="nofollow">designs</a>. </li>
              <li> Create a new repository at http://gitlab.org/KPMP </li>
              <li> Create a new branch called 'develop'</li>
              <li> Create a Google Analytics tracking Id </li>
              <li>
                {' '}
                Update the Google Analytics tracking Id in App.js (search for
                'const GA_TRACKING_ID')
              </li>
              <li> Change the title in public/index.html</li>
              <li>
                {' '}
                Remove the carrots from package.json dependencies and
                devDependencies{' '}
              </li>
              <li>
                {' '}
                Check to see if the versions included in package.json are the
                latest versions we want to use. If not, update them in
                package.json now and create a card to update them in our custom
                react-scripts.
              </li>
              <li>
                {' '}
                Add a new origin to this project where you created the new
                repository 'git remote add origin &lt;url to git repo&gt;'
              </li>
              <li> Push this code to github under the develop branch</li>
              <li>
                {' '}
                Set up the git repo at github:
                <ul>
                  <li>
                    {' '}
                    Click on settings near the upper right and select
                    'Collaborators & teams'
                  </li>
                  <li>
                    {' '}
                    Add the appropriate collaborators (use Add collaborator
                    button)
                  </li>
                  <li> Click on 'Branches' from the menu on the left </li>
                  <li> Change the default branch to develop</li>
                  <li>
                    {' '}
                    Add branch protection rules for develop and master (select
                    Require pull request reviews...)
                  </li>
                </ul>
              </li>
              <li>
                {' '}
                Set up GitHub Action to run build 
                <ul>
                  <li>
                    {' '}
                    Click on Actions in your new GitHub repo
                  </li>
                  <li> Find Node.js and click "Set up this workflow"</li>
                  <li>
                    {' '}
                    Accept the generated file and click Start commit. Fill in details of commit and bam, you good to go
                  </li>
                </ul>
              </li>
              <li>
                {' '}
                Determine whether we need a username in the header. If so, write
                a card to add it (and probably borrow code from orion-web to do
                so).
              </li>
              <li> Have a drink and celebrate, we have a new web project!</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Directions;
