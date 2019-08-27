        //---------------- CONFIGURATION --------------------
         let config = {
            rootMargin: '0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };
        //---------------------------------------------------
        

        //--------------------------------------------------------

        let mediaQuery = window.matchMedia("(max-width: 600px)");

        //--------------------------------------------------------


        //------------------- SECTION ONE -------------------
        const secOneLeftText = document.querySelector('.sec-one-left-text');
        
        secOneLeftTextObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    // console.log('in the view');
                    entry.target.classList.add("animate-to-right");
                    // observer.unobserve(entry.target);
                } else if (mediaQuery.matches) {
                    // console.log('out of view');
                    entry.target.classList.remove("animate-to-right");
                }
            });
        }, config);

        secOneLeftTextObserver.observe(secOneLeftText);


        const secOneRightText = document.querySelector('.sec-one-right-text');

        secOneRightTextObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-to-left");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-to-left");
                }
            });
        }, config);

        secOneRightTextObserver.observe(secOneRightText);


        const secOneBtn = document.querySelector('.sec-one-btn');

        secOneBtnObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-to-down");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-to-down");
                }
            });
        }, config);

        secOneBtnObserver.observe(secOneBtn);
        
        
        //--------------- VERTICAL TEXTS ---------------
        const secOneLetters = document.querySelectorAll('.letter');

        secOneLetterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-letter-to-right");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-letter-to-right");
                }
            });
        }, config);

        secOneLetters.forEach(lett => {
            secOneLetterObserver.observe(lett);
        });


        const secOneVerticalLeftParagraph = document.querySelector('.vertical-left>p');
        // console.log(secOneVerticalLeftParagraph);
        secOneVerticalLeftParagraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-paragraph-to-right");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-paragraph-to-right");
                }
            });
        }, config);

        secOneVerticalLeftParagraphObserver.observe(secOneVerticalLeftParagraph);

        // Get the content value of .element:before
        // var content = window.getComputedStyle(
        //     document.querySelector('#adipicit>div.vertical-left>p'), ':before'
        // ).getPropertyValue('content');
        // console.log(content);


        const secOneVerticalRightParagraph = document.querySelector('.vertical-right>p');

        secOneVerticalRightParagraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-paragraph-to-right");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-paragraph-to-right");
                }
            });
        }, config);

        secOneVerticalRightParagraphObserver.observe(secOneVerticalRightParagraph);
        //---------------------------------------------------
        //---------------------------------------------------
        
        
        //------------------- SECTION TWO -------------------
        const secTwoLeftTextHeading = document.querySelector('.left-text-heading');
        
        secTwoLeftTextHeadingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-heading-to-right");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-heading-to-right");
                }
            });
        }, config);

        secTwoLeftTextHeadingObserver.observe(secTwoLeftTextHeading);

        const secTwoLeftTextParagraph = document.querySelector('.left-text-paragraph');
        
        secTwoLeftTextParagraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-paragraph-to-up");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-paragraph-to-up");
                }
            });
        }, config);

        secTwoLeftTextParagraphObserver.observe(secTwoLeftTextParagraph);


        const secTwoRightTextImg = document.querySelector('.right-text-img');

        secTwoRightTextImgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0 && !mediaQuery.matches) {
                    entry.target.classList.add("animate-img-to-left");
                } else if (mediaQuery.matches) {
                    entry.target.classList.remove("animate-img-to-left");
                }
            });
        }, config);

        secTwoRightTextImgObserver.observe(secTwoRightTextImg);
        //----------------------------------------------------
        
        
        
        
        //------------------- SECTION FOUR -------------------
        
        //--------------- VERTICAL TEXTS ---------------
        const secFourVerticalTwoLeftParagraph = document.querySelector('.vertical-left2>p');
        
        secFourVerticalTwoLeftParagraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-paragraph-to-right");
                } else {
                    entry.target.classList.remove("animate-paragraph-to-right");
                }
            });
        }, config);

        secFourVerticalTwoLeftParagraphObserver.observe(secFourVerticalTwoLeftParagraph);
        //----------------------------------------------
        

        const secFourBigHeading = document.querySelector('.big-heading');
        
        secFourBigHeadingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-big-heading");
                } else {
                    entry.target.classList.remove("animate-big-heading");
                }
            });
        }, config);

        secFourBigHeadingObserver.observe(secFourBigHeading);


        const secFourCtaBtn = document.querySelector('.cta-btn');
        
        secFourCtaBtnObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-cta-btn");
                } else {
                    entry.target.classList.remove("animate-cta-btn");
                }
            });
        }, config);

        secFourCtaBtnObserver.observe(secFourCtaBtn);


        const secFourCyanText = document.querySelector('.cyan-text');
        
        secFourCyanTextObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-cyan-to-down");
                } else {
                    entry.target.classList.remove("animate-cyan-to-down");
                }
            });
        }, config);

        secFourCyanTextObserver.observe(secFourCyanText);
        //----------------------------------------------------
        

        //------------------- SECTION FIVE -------------------
        const secFiveVerticalTwoRightParagraph = document.querySelector('.vertical-right2>p');
        
        secFiveVerticalTwoRightParagraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-paragraph-to-right");
                } else {
                    entry.target.classList.remove("animate-paragraph-to-right");
                }
            });
        }, config);
        
        secFiveVerticalTwoRightParagraphObserver.observe(secFiveVerticalTwoRightParagraph);

        const secFiveHeading = document.querySelector('.left-text-heading2');

        secFiveHeadingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-heading2-to-right");
                } else {
                    entry.target.classList.remove("animate-heading2-to-right");
                }
            });
        }, config);

        secFiveHeadingObserver.observe(secFiveHeading);


        const secFiveHeadingThree = document.querySelectorAll('h3');

        secFiveHeadingThreeObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-heading3-to-up");
                } else {
                    entry.target.classList.remove("animate-heading3-to-up");
                }
            });
        }, config);

        secFiveHeadingThree.forEach(headingthree => {
            secFiveHeadingThreeObserver.observe(headingthree);
        });


        const secFiveRightText = document.querySelector('.sec-five-right-text');

        secFiveRightTextObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-sec-five-paragraph-to-down");
                } else {
                    entry.target.classList.remove("animate-sec-five-paragraph-to-down");
                }
            });
        }, config);

        secFiveRightTextObserver.observe(secFiveRightText);


        // const secFiveRightTexts = document.querySelectorAll('.sec-five-right-text');
        // secFiveRightTextObserver = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.intersectionRatio > 0) {
        //             entry.target.classList.add("animate-sec-five-paragraph-to-down");
        //         } else {
        //             entry.target.classList.remove("animate-sec-five-paragraph-to-down");
        //         }
        //     });
        // }, config);
        // secFiveRightTexts.forEach(texts => {
        //     secFiveRightTextObserver.observe(texts);
        // });


        const secFiveBtn = document.querySelector('.sec-five-btn');

        secFiveBtnObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-sec-five-btn-to-left");
                } else {
                    entry.target.classList.remove("animate-sec-five-btn-to-left");
                }
            });
        }, config);

        secFiveBtnObserver.observe(secFiveBtn);
        //----------------------------------------------------
        

        //---------------------- FOOTER ----------------------
        const logoImg = document.querySelector('.logo-img');

        logoImgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-logo-fade-in");
                } else {
                    entry.target.classList.remove("animate-logo-fade-in");
                }
            });
        }, config);

        logoImgObserver.observe(logoImg);


        const footerParags = document.querySelectorAll('.parag');

        footerParagsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-footer-parag-up");
                } else {
                    entry.target.classList.remove("animate-footer-parag-up");
                }
            });
        }, config);

        footerParags.forEach(parag => {
            footerParagsObserver.observe(parag);
        });


        const footerCopyright = document.querySelector('.copyright');

        footerCopyrightObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("animate-copyright-down");
                } else {
                    entry.target.classList.remove("animate-copyright-down");
                }
            });
        }, config);

        footerCopyrightObserver.observe(footerCopyright);
