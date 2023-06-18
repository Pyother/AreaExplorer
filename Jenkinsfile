pipeline {
  agent any
  stages {
    stage('Configure') {
      steps {
        sh 'echo "CONFIGURATION"'
        sh 'rm *.tgz'
        sh 'ls'
        sh '''echo \'BUILD_NUMBER: {BUILD_NUMBER}\'

'''
      }
    }

    stage('Build') {
      steps {
        sh 'echo "BUILD"'
        sh 'npm install -f react-scripts'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "TEST"'
        sh 'npm run test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "DEPLOY"'
        sh './package_update.sh'
        sh 'npm -y init'
        sh 'npm pack'
        sh 'ls'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "PUBLISH"'
        archiveArtifacts 'AreaExplorer_master-1.0.0.tgz'
      }
    }

  }
  environment {
    BUILD_NUMBER = '${BUILD_NUMBER}'
  }
}