A5.themes.add('nav',{
	editButtonGroup: {
		base: {
			container: {
				className: 'navEditBG',
				hoverClassName: 'navEditBGHover',
				focusClassName: 'navEditBGFocus',
				separatorClassName: 'navEditBGSeparator',
				editClassName: 'navEditBGEdit',
				button: {
					html: '<img src="" />',
					className: 'navEditBGButton',
					hoverClassName: 'navEditBGButtonHover',
					pressedClassName: 'navEditBGButtonPressed'
				}
			}
		}
	},
	button: {
		base: {
			className: 'navButton',
			hoverClassName: 'navButtonHover',
			pressedClassName: 'navButtonPressed',
			disabledClassName: 'navButtonDisabled'
		},
		toolbar: {
			className: 'navButtonT',
			hoverClassName: 'navButtonTHover',
			pressedClassName: 'navButtonTPressed',
			disabledClassName: 'navButtonTDisabled'
		}
	},
	buttonDropdown: {
		base: {
			className: 'navButtonDD',
			hoverClassName: 'navButtonDDHover',
			pressedClassName: 'navButtonDDPressed',
			disabledClassName: 'navButtonDDDisabled',
			contentClassName: 'navButtonDDContent',
			dropdown: {
				className: 'navButtonDDDropdown',
				icon: ''
			}
		},
		toolbar: {
			className: 'navButtonTDD',
			hoverClassName: 'navButtonTDDHover',
			pressedClassName: 'navButtonTDDPressed',
			disabledClassName: 'navButtonTDDDisabled',
			contentClassName: 'navButtonTDDContent',
			dropdown: {
				className: 'navButtonTDDDropdown',
				icon: ''
			}
		}
	},
	buttonSplit: {
		base: {
			className: 'navButtonDD',
			hoverClassName: 'navButtonDDHover',
			pressedClassName: 'navButtonDDPressed',
			disabledClassName: 'navButtonDDDisabled',
			contentClassName: 'navButtonDDSplitContent',
			dropdown: {
				className: 'navButtonDDSplitDropdown',
				hoverClassName: 'navButtonDDSplitDropdownHover',
				icon: ''
			}
		},
		toolbar: {
			className: 'navButtonTDD',
			hoverClassName: 'navButtonTDDHover',
			pressedClassName: 'navButtonTDDPressed',
			disabledClassName: 'navButtonTDDDisabled',
			contentClassName: 'navButtonTDDSplitContent',
			dropdown: {
				className: 'navButtonTDDSplitDropdown',
				hoverClassName: 'navButtonTDDSplitDropdownHover',
				icon: ''
			}
		}
	},
	slider: {
		base: {
			className: 'navSliderH',
			innerClassName: 'navSliderHInner',
			handle: {
				className: 'navSliderHHandle',
				minClassName: 'navSliderHHandleMin',
				maxClassName: 'navSliderHHandleMax',
				selectedClassName: 'navSliderHHandleSelected',
				hoverClassName: 'navSliderHHandleHover'
			},
			range: {
				className: 'navSliderHRange',
				selectedClassName: 'navSliderHRangeSelected',
				hoverClassName: 'navSliderHRangeHover'
			}
		}
	},
	listbox: {
		base: {
			className: 'navList',
			focusClassName: 'navListFocus',
			item: {
				className: 'navListItem',
				hoverClassName: 'navListItemHover',
				selectedClassName: 'navListItemSelected',
				titleClassName: 'navListTitle',
				separatorClassName: 'navListSeparator'
			}
		}
	},
	tree: {
		base: {
			className: 'navTree',
			focusClassName: 'navTreeFocus',
			node: {
				className: 'navTreeNode',
				hoverClassName: 'navTreeNodeHover',
				selectedClassName: 'navTreeNodeSelected',
				labelClassName: 'navTreeNodeLabel',
				leaf: {
					firstImage: '',
					image: '',
					lastImage: ''
				},
				branch: {
					firstExpandedImage: '',
					firstCollapsedImage: '',
					firstExpandedHoverImage: '',
					firstCollapsedHoverImage: '',
					expandedImage: 'CSS/A5System/Vista/tree/bc.png',
					collapsedImage: 'CSS/A5System/Vista/tree/bo.png',
					expandedHoverImage: '',
					collapsedHoverImage: '',
					lastExpandedImage: '',
					lastCollapsedImage: '',
					lastExpandedHoverImage: '',
					lastCollapsedHoverImage: ''
				}
			},
			branch: {
				className: 'navTreeBranch',
				lineImage: '',
				nullImage: 'CSS/A5System/Vista/tree/n.png'
			}
		}
	},
	datePicker: {
		base: {
			className: 'navDP',
			calendar: {
				daysOfWeek: {
					show: true,
					className: 'navDPDaysOfWeek'
				},
				weeksOfYear: {
					show: false,
					className: 'navDPWeeksOfYear',
					headerClassName: 'navDPWeeksOfYearHeader'
				},
				date: {
					className: 'navDPDate',
					weekendClassName: 'navDPDateWeekend',
					todayClassName: 'navDPDateToday',
					item: {
						className: 'navDPItem',
						hoverClassName: 'navDPItemHover',
						selectedClassName: 'navDPItemSelected',
						disabledClassName: 'navDPItemDisabled',
						outOfRangeClassName: 'navDPItemOutOfRange'
					}
				}
			},
			navigator: {
				header: {
					className: 'navDPHeader',
					prevIcon: '',
					nextIcon: '',
					prevIconHover: '',
					nextIconHover: '',
					item: {
						className: 'navDPHeaderButton',
						hoverClassName: 'navDPHeaderButtonHover',
						selectedClassName: 'navDPHeaderButtonSelected'
					}
				},
				panel: {
					className: 'navDPPanel',
					edit: {
						className: 'navEdit'
					},
					item: {
						className: 'navDPItem',
						hoverClassName: 'navDPItemHover',
						selectedClassName: 'navDPItemSelected',
						disabledClassName: 'navDPItemDisabled'
					}
				}
			}
		}
	},
	timePicker: {
		base: {
			className: 'navTP',
			edit: {
				className: 'navEdit',
				buttonClassName: 'navTPEditButton',
				buttonImage: ''
			},
			meridianClassName: 'navTPMeridianButton'
		}
	},
	menu: {
		base: {
			className: 'navMenu',
			innerClassName: 'navMenuInner',
			closeOnLeave: true,
			closeWait: 500,
			cascadeOffsetX: 0,
			cascadeOffsetY: 0,
			iconColumn: {
				className: 'navMenuIconColumn',
				preventIndentClassName: 'navMenuNoIndent',
				width: '22px'
			},
			item: {
				className: 'navMenuItem',
				labelClassName: 'navMenuItemLabel',
				hoverClassName: 'navMenuItemHover',
				selectedClassName: 'navMenuItemSelected',
				disabledClassName: 'navMenuItemDisabled',
				disabledHoverClassName: 'navMenuItemDisabledHover',
				cascadeClassName: 'navMenuItemCascade',
				separatorClassName: 'navMenuSeparator',
				titleClassName: 'navMenuTitle',
				radioImage: 'images/$$format.border.style.solid.png.a5image',
				checkImage: 'images/$$generic.check.png.a5image'
			}
		}
	},
	menubar: {
		base: {
			item: {
				className: 'navMenubarHItem',
				hoverClassName: 'navMenubarHItemHover',
				pressedClassName: 'navMenubarHItemPressed',
				disabledClassName: 'navMenubarHItemDisabled',
				cascadeClassName: 'navMenubarHItemCascade',
				separatorClassName: 'navMenubarHSeparator'
			}
		},
		vertical: {
			item: {
				className: 'navMenubarVItem',
				hoverClassName: 'navMenubarVItemHover',
				pressedClassName: 'navMenubarVItemPressed',
				disabledClassName: 'navMenubarVItemDisabled',
				cascadeClassName: 'navMenubarVItemCascade',
				separatorClassName: 'navMenubarVSeparator'
			}
		}
	},
	window: {
		base: {
			className: 'navWin',
			outerWrapClassName: 'navWinInner',
			innerWrapClassName: 'navWinBodyContainer',
			adjustmentClassName: 'navWinAdjust',
			activeClassName: 'navWinActive',
			lockUIClassName: 'navUILock',
			title: {className: 'navWinTitle', tools: {inset: '4px'}},
			header: {className: 'navWinHeader'},
			tbar: {className: 'navWinTBAR'},
			body: {className: 'navWinBody'},
			bbar: {className: 'navWinBBAR'},
			buttons: {className: 'navWinButtons'},
			footer: {className: 'navWinFooter'},
			resizer: {
				className: 'navWinResizer',
				thumbImage: 'CSS/A5System/Images/resizeThumb.gif'
			},
			_buttonDefaults: {
				className: 'navButton',
				hoverClassName: 'navButtonHover',
				pressedClassName: 'navButtonPressed',
				disabledClassName: 'navButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'images/$$window.button.close.png.a5image',
					imageHover: '',
					imagePressed: 'images/$$window.button.close.pressed.png.a5image',
					action: 'close'
				}
			}
		},
		dropdown: {
			className: 'navDDWin',
			outerWrapClassName: 'navDDWinInner',
			innerWrapClassName: 'navDDWinBodyContainer',
			adjustmentClassName: 'navDDWinAdjust',
			activeClassName: 'navDDWinActive',
			lockUIClassName: 'navUILock',
			title: {className: 'navDDWinTitle', tools: {inset: '4px'}},
			header: {className: 'navDDWinHeader'},
			tbar: {className: 'navDDWinTBAR'},
			body: {className: 'navDDWinBody'},
			bbar: {className: 'navDDWinBBAR'},
			buttons: {className: 'navDDWinButtons'},
			footer: {className: 'navDDWinFooter'},
			resizer: {
				className: 'navDDWinResizer',
				thumbImage: 'CSS/A5System/Images/resizeThumb.gif'
			},
			_buttonDefaults: {
				className: 'navButton',
				hoverClassName: 'navButtonHover',
				pressedClassName: 'navButtonPressed',
				disabledClassName: 'navButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'images/$$window.button.close.png.a5image',
					imageHover: '',
					imagePressed: 'images/$$window.button.close.pressed.png.a5image',
					action: 'close'
				}
			}
		}
	},
	accordion: {
		base: {
			titleClassName: 'navAccordionButton',
			titleSelectedClassName: 'navAccordionButtonSelected',
			titleDisabledClassName: 'navAccordionButtonDisabled',
			paneClassName: 'navAccordionPane'
		}
	},
	tab: {
		base: {
			tabClassName: 'navTabTButton',
			tabSelectedClassName: 'navTabTButtonSelected',
			tabDisabledClassName: 'navTabTButtonDisabled',
			paneClassName: 'navTabTPane'
		},
		bottom: {
			tabClassName: 'navTabBButton',
			tabSelectedClassName: 'navTabBButtonSelected',
			tabDisabledClassName: 'navTabBButtonDisabled',
			paneClassName: 'navTabBPane'
		},
		left: {
			tabClassName: 'navTabLButton',
			tabSelectedClassName: 'navTabLButtonSelected',
			tabDisabledClassName: 'navTabLButtonDisabled',
			paneClassName: 'navTabLPane'
		},
		right: {
			tabClassName: 'navTabRButton',
			tabSelectedClassName: 'navTabRButtonSelected',
			tabDisabledClassName: 'navTabRButtonDisabled',
			paneClassName: 'navTabRPane'
		}
	},
	tabBand: {
		base: {
			location: 'top',
			className: 'navTabbandT',
			separator:{
				className: 'navTabbandTSeparator',
				show: true
			},
			tab: {
				className: 'navTabbandTButton',
				selectedClassName: 'navTabbandTButtonSelected',
				disabledClassName: 'navTabbandTButtonDisabled',
				closeIcon: 'CSS/A5System/Images/tabclose.png',
				closeIconHover: 'CSS/A5System/Images/tabcloseHover.png'
			},
			scrollButtons: {
				prevClassName: 'navTabbandTLScroll',
				prevDisabledClassName: 'navTabbandTLScrollDisabled',
				prevImage: 'CSS/nav/GridPagePrev.png',
				prevDisabledImage: 'CSS/nav/GridPagePrevDisabled.png',
				nextClassName: 'navTabbandTRScroll',
				nextDisabledClassName: 'navTabbandTRScrollDisabled',
				nextImage: 'CSS/nav/GridPageNext.png',
				nextDisabledImage: 'CSS/nav/GridPageNextDisabled.png'
			}
		},
		bottom: {
			location: 'bottom',
			className: 'navTabbandB',
			separator:{
				className: 'navTabbandBSeparator',
				show: true
			},
			tab: {
				className: 'navTabbandBButton',
				selectedClassName: 'navTabbandBButtonSelected',
				disabledClassName: 'navTabbandBButtonDisabled',
				closeIcon: 'CSS/A5System/Images/tabclose.png',
				closeIconHover: 'CSS/A5System/Images/tabcloseHover.png'
			},
			scrollButtons: {
				prevClassName: 'navTabbandBLScroll',
				prevDisabledClassName: 'navTabbandBLScrollDisabled',
				prevImage: 'CSS/nav/GridPagePrev.png',
				prevDisabledImage: 'CSS/nav/GridPagePrevDisabled.png',
				nextClassName: 'navTabbandBRScroll',
				nextDisabledClassName: 'navTabbandBRScrollDisabled',
				nextImage: 'CSS/nav/GridPageNext.png',
				nextDisabledImage: 'CSS/nav/GridPageNextDisabled.png'
			}
		}
	}
});