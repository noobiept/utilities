# python 3.4

import subprocess
import os.path

CURRENT_DIR = os.path.dirname( os.path.abspath( __file__ ) )
COMPRESSOR_PATH = os.path.join( CURRENT_DIR, 'yuicompressor-2.4.8.jar' )


def compress( pathToFile ):

    fileName = os.path.splitext( pathToFile )[ 0 ]
    minFileName = '{}-min.js'.format( fileName )

    subprocess.call( [ 'java', '-jar', COMPRESSOR_PATH, pathToFile, '-o', minFileName ] )


if __name__ == '__main__':

    compress( 'utilities-1.4.js' )