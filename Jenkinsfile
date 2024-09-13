pipeline {
	agent any 

	tools {
    nodejs "NODE16"
    // sonar "SonarQube Scanner for JavaScript"
	}

  environment {
    FRONTEND_SONAR_KEY = 'MERN-Frontend'
    BACKEND_SONAR_KEY = 'MERN-backend'
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
      steps{
        dir('frontend'){
          withSonarQubeEnv('SonarQube Server'){
            sh '''
            sonar-scanner \
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
      steps{
        dir('backend'){
          withSonarQubeEnv('SonarQube Server'){
            sh '''
            sonar-scanner \
              -Dsonar.projectKey=$BACKEND_SONAR_KEY \
              -Dsonar.sources=. \
              -Dsonar.language=js \
              -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
            '''
          }
        }
      }
    }

    stage('Quality Gate Check') {
            steps {
                script {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

  }
}
