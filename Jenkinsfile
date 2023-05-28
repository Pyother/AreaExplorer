pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Process'
        sh '''rm -rf *
'''
        sh 'git clone https://github.com/Pyother/AreaExplorer.git'
        dir(path: 'AreaExplorer/dockerfiles') {
          sh 'ls'
          sh 'docker --version'
        }

      }
    }

    stage('Test') {
      steps {
        sh 'echo "Test"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "Deploy"'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "Publish"'
      }
    }

  }
  environment {
    GIT_DISCOVERY_ACROSS_FILESYSTEM = 'true'
  }
}