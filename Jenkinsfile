pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        sh 'echo "Checkout"'
      }
    }

    stage('Build') {
      steps {
        echo 'Build Process'
        sh '''rm -rf *
git clone https://github.com/Pyother/AreaExplorer
'''
        sh 'cd AreaExplorer_master/frontend'
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
}