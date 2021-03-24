using System;
using System.Collections.Generic;
using System.Text;

namespace realtimedelegatedemo
{
    class VideoPlayer

    {
        private int videostatus;

        public int playvideo(string type)
        {

            if (type == "mp4")
            {

                videostatus = 0;
                return videostatus;
            }
            else
            {
                videostatus = -1;
                return videostatus;
            }

            
        }
    }
}
