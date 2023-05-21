pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        sh '''echo "Checkout"
git clone \'https://github.com/Pyother/AreaExplorer\''''
      }
    }

    stage('Build') {
      steps {
        sh '''echo "Build"
npm install react
npm install react-scripts'''
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