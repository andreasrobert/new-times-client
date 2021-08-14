import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({ 
  mm: "410px",
  md: "450px",
  ts: "525px",
  mb: "635px",
  tm: "685px",
  ms: "757px",
  tb: "845px",
  sm: "1090px",   //third
  lg: "1260px",  // after 1000px or x use->[fifth] before 1440px
  xl: "1440px",  // after 1440px or x use->[sixth]
})


export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Playfair Display SC", //EB Garamond 4-8, Playfair Display 4-9, Manrope 2-8
        fontWeight: "900",
        color:"black",
        fontStyle: "normal",

      },
      sizes: {
        
        H1: {
          fontFamily: "Playfair Display SC",
          fontSize: {base:"8.8vw",mb:"8vw",tb:"70px"},
          fontWeight: "900",
        },

        H2:{
          fontFamily: "Playfair Display",
          fontStyle:"italic",
          fontSize: {base:"42px"}, 
        },
        
        H3: {
          fontFamily: "Playfair Display",
          fontSize: {base:"20px"},
        },

        H4: {
          fontFamily: "Playfair Display",
          fontSize: {base:"24px"},  
        },

        H5: {
          fontFamily: "EB Garamond",
          fontSize: "20px",
          fontWeight: "400"
        },
        H7: {
          fontFamily: "EB Garamond",
          fontSize: "15px",
          fontWeight: "400"
        },

        H8: {
          fontFamily: "Playfair Display",
          fontSize: {base:"17px"}, 
          fontWeight: "700",

        },


      },
    },

    Text: {
      baseStyle: {
        fontFamily: "EB Garamond",
        fontWeight: "400",
        fontSize: "1.1rem",
      },
      sizes: {
        p: {
            fontSize: {base:"1.1rem"},
          },
      },
    },
  },


  breakpoints
});
