# python 3.4

import subprocess
import os.path
import json
import shutil

CURRENT_DIR = os.path.dirname( os.path.abspath( __file__ ) )
COMPRESSOR_PATH = os.path.join( CURRENT_DIR, 'yuicompressor-2.4.8.jar' )


def compress( filePath, definitionsPath, infoPath ):

        # get the name and version from the info file
    with open( infoPath, 'r', encoding= 'utf-8' ) as f:
        info = json.load( f )

    fileName = info[ 'name' ]
    version = info[ 'version' ]

        # compress the javascript file
    minFileName = '{}-{}-min.js'.format( fileName, version )

    subprocess.call( [ 'java', '-jar', COMPRESSOR_PATH, filePath, '-o', minFileName ] )

        # make a copy of the definitions with the version in its name
    minDefinitionsName = '{}-{}.d.ts'.format( fileName, version )

    shutil.copyfile( definitionsPath, minDefinitionsName )


if __name__ == '__main__':

    compress( 'utilities.js', 'utilities.d.ts', 'info.json' )