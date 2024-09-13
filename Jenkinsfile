pipeline {
	agent any 

	tools {
    nodejs "NODE16"
	}

  environment {
    FRONTEND_SONAR_KEY = 'MERN-Frontend'
    BACKEND_SONAR_KEY = 'MERN-Backend'
  }

  stages{

    stage ('Install Dependencies'){
      steps{
        dir ('frontend'){
          sh 'npm install'
        }

        dir ('backend') {
          sh 'npm install'
        }
      }
    }

    stage ('Sonarqube Analysis (Frontend)'){
      environment {
             scannerHome = tool 'SonarQube-Javascript'
      }
	    steps{
        dir('frontend'){
          withSonarQubeEnv('SonarQube-Frontend'){
            sh '''
            ${scannerHome}/bin/sonar-scanner \
              -Dsonar.projectKey=$FRONTEND_SONAR_KEY \
              -Dsonar.sources=. \
              -Dsonar.language=js \
              -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
            '''
          }
        }
      }
    }


    stage ('Sonarqube Analysis (Backend)'){
      environment {
          scannerHome = tool 'SonarQube-Javascript'
      }
      steps{
        dir('backend'){
          withSonarQubeEnv('SonarQube-Backend'){
            sh '''
            ${scannerHome}/bin/sonar-scanner \
              -Dsonar.projectKey=$BACKEND_SONAR_KEY \
              -Dsonar.sources=. \
              -Dsonar.language=js \
              -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
            '''
          }
        }
      }
    }

  }
}
