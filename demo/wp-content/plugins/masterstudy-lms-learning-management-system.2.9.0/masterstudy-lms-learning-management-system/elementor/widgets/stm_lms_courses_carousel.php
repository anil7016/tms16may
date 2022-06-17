<?php
/**
 * @file
 * Description of what this module (or file) is doing.
 */
// phpcs:ignoreFile

namespace StmLmsElementor\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Elementor Hello World
 *
 * Elementor widget for hello world.
 *
 * @since 1.0.0
 */
class StmLmsCoursesCarousel extends Widget_Base {

	/**
	 * Retrieve the widget name.
	 *
	 * @return string Widget name.
	 * @since  1.0.0
	 *
	 * @access public
	 */
	public function get_name() {
		return 'stm_lms_courses_carousel';
	}

	/**
	 * Retrieve the widget title.
	 *
	 * @return string Widget title.
	 * @since  1.0.0
	 *
	 * @access public
	 */
	public function get_title() {
		return __( 'Courses Carousel', 'masterstudy-lms-learning-management-system' );
	}

	/**
	 * Retrieve the widget icon.
	 *
	 * @return string Widget icon.
	 * @since  1.0.0
	 *
	 * @access public
	 */
	public function get_icon() {
		return 'eicon-media-carousel lms-icon';
	}

	/**
	 * Retrieve the list of categories the widget belongs to.
	 *
	 * Used to determine where to display the widget in the editor.
	 *
	 * Note that currently Elementor supports only one category.
	 * When multiple categories passed, Elementor uses the first one.
	 *
	 * @return array Widget categories.
	 * @since  1.0.0
	 *
	 * @access public
	 */
	public function get_categories() {
		return [ 'theme-elements' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'masterstudy-lms-learning-management-system' ),
			]
		);
		$this->add_control(
			'title',
			[
				'name'        => 'title',
				'label'       => __( 'Title', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);

		$this->add_control(
			'title_color',
			[
				'name'        => 'title_color',
				'label'       => __( 'Title color', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::COLOR,
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .stm_lms_courses_carousel__top h3 ' => 'color: {{VALUE}}' ,
					'{{WRAPPER}} .stm_lms_courses_carousel__top .h4' => 'color: {{VALUE}}' ,
					'{{WRAPPER}} .stm_lms_courses_carousel__top .h4:hover' => 'color: {{VALUE}} !important' ,
					'{{WRAPPER}} .stm_lms_courses_carousel__buttons .stm_lms_courses_carousel__button i:before' => 'border-color:  {{VALUE}}',
					'{{WRAPPER}} .stm_lms_courses_carousel__buttons .stm_lms_courses_carousel__button_next i:before' => 'border-color: {{VALUE}} ',
				],
			]
		);

		$this->add_control(
			'query',
			[
				'name'        => 'query',
				'label'       => __( 'Sort', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'none'    => __( 'None', 'masterstudy-lms-learning-management-system' ),
					'popular' => __( 'Popular', 'masterstudy-lms-learning-management-system' ),
					'free'    => __( 'Free', 'masterstudy-lms-learning-management-system' ),
					'rating'  => __( 'Rating', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'none'
			]
		);

		$this->add_control(
			'prev_next',
			array(
				'name'        => 'prev_next',
				'label'       => __( 'Prev/Next Buttons', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'enable'  => __( 'Enable', 'masterstudy-lms-learning-management-system' ),
					'disable' => __( 'Disable', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'enable'
			)
		);

		$this->add_control(
			'prev_next_style',
			[
				'name'        => 'prev_next_style',
				'label'       => __( 'Prev/Next Buttons Style', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'style_1' => __( 'Style 1', 'masterstudy-lms-learning-management-system' ),
					'style_2' => __( 'Style 2', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'style_1',
				'condition'   => [
					'prev_next' => 'enable',
				],
			]
		);

		$this->add_control(
			'remove_border',
			[
				'name'        => 'remove_border',
				'label'       => __( 'Remove border', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'enable'  => __( 'Enable', 'masterstudy-lms-learning-management-system' ),
					'disable' => __( 'Disable', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'disable'
			]
		);

		$this->add_control(
			'show_categories',
			[
				'name'        => 'show_categories',
				'label'       => __( 'Show categories', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'enable'  => __( 'Enable', 'masterstudy-lms-learning-management-system' ),
					'disable' => __( 'Disable', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'disable'
			]
		);

		$this->add_control(
			'pagination',
			[
				'name'        => 'pagination',
				'label'       => __( 'Pagination', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options'     => array(
					'enable'  => __( 'Enable', 'masterstudy-lms-learning-management-system' ),
					'disable' => __( 'Disable', 'masterstudy-lms-learning-management-system' ),
				),
				'default'     => 'disable'
			]
		);

		$this->add_control(
			'per_row',
			array(
				'name'        => 'per_row',
				'label'       => __( 'Courses per row', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::NUMBER,
				'label_block' => true,
				'default'     => 6
		)
		);

		$this->add_control(
			'posts_per_page',
			[
				'name'        => 'Posts per page',
				'label'       => __( 'Courses per carousel', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::NUMBER,
				'label_block' => true,
				'default'     => 12
			]
		);

		$this->add_control(
			'taxonomy',
			[
				'name'        => 'taxonomy',
				'label'       => __( 'Select taxonomy', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT2,
				'label_block' => true,
				'multiple'    => true,
				'options'     => stm_lms_elementor_autocomplete_terms( 'stm_lms_course_taxonomy' ),
				'condition'   => [
					'show_categories' => 'enable',
				],
			]
		);

		$this->add_control(
			'taxonomy_default',
			[
				'name'        => 'taxonomy_default',
				'label'       => __( 'Show Courses From categories:', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::SELECT2,
				'label_block' => true,
				'multiple'    => true,
				'options'     => stm_lms_elementor_autocomplete_terms( 'stm_lms_course_taxonomy' ),
				'condition'   => [
					'show_categories' => 'disable',
				],
			]
		);

		$this->add_control(
			'image_size',
			[
				'name'        => 'image_size',
				'label'       => __( 'Image size (Ex. : thumbnail)', 'masterstudy-lms-learning-management-system' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function render() {
		$settings     = $this->get_settings_for_display();
		$atts         = array(
			'css'              => '',
			'title_color'      => ! empty( $settings['title_color'] ) ? $settings['title_color'] : '',
			'title'            => ! empty( $settings['title'] ) ? $settings['title'] : '',
			'query'            => ! empty( $settings['query'] ) ? $settings['query'] : 'none',
			'prev_next'        => ! empty( $settings['prev_next'] ) ? $settings['prev_next'] : 'enable',
			'prev_next_style'  => ! empty( $settings['prev_next_style'] ) ? $settings['prev_next_style'] : 'style_1',
			'per_row'          => ! empty( $settings['per_row'] ) ? $settings['per_row'] : 6,
			'posts_per_page'   => ! empty( $settings['posts_per_page'] ) ? $settings['posts_per_page'] : 12,
			'pagination'       => ! empty( $settings['pagination'] ) ? $settings['pagination'] : 'disable',
			'taxonomy'         => ! empty( $settings['taxonomy'] ) ? implode( ',', $settings['taxonomy'] ) : array(),
			'taxonomy_default' => ! empty( $settings['taxonomy_default'] ) ? implode( ',', $settings['taxonomy_default'] ) : array(),
			'image_size'       => ! empty( $settings['image_size'] ) ? $settings['image_size'] : '',
			'show_categories'  => ! empty( $settings['show_categories'] ) ? $settings['show_categories'] : 'disable',
		);
		$uniq         = stm_lms_create_unique_id( $atts );
		$atts['uniq'] = $uniq;
		\STM_LMS_Templates::show_lms_template( 'vc_templates/templates/stm_lms_courses_carousel', $atts );
	}

	/**
	 * Render the widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function content_template() {

	}
}
