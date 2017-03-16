"use strict";

var toml = require("toml");
var fs = require("fs");

var DefaultStrategy = function () {
	return {
		UPM: 1000,
		BLUEZONE_WIDTH: 15,
		PPEM_INCREASE_GLYPH_LIMIT: 18,
		PPEM_MIN: 12,
		PPEM_MIT: 16,
		PPEM_MAX: 40,
		PPEM_LOCK_BOTTOM: 28,

		CANONICAL_STEM_WIDTH: 65,
		CANONICAL_STEM_WIDTH_SMALL: 65,
		CANONICAL_STEM_WIDTH_LARGE_ADJ: 0,
		CANONICAL_STEM_WIDTH_DENSE: 65,

		ABSORPTION_LIMIT: 65,
		STEM_SIDE_MIN_RISE: 40,
		STEM_SIDE_MIN_DESCENT: 60,
		STEM_CENTER_MIN_RISE: 40,
		STEM_CENTER_MIN_DESCENT: 60,
		STEM_SIDE_MIN_DIST_RISE: 40,
		STEM_SIDE_MIN_DIST_DESCENT: 60,
		SLOPE_FUZZ: 0.132,
		SLOPE_FUZZ_NEG: 0.075,
		SLOPE_FUZZ_K: 0.035,
		SLOPE_FUZZ_R: 0.01,
		SLOPE_FUZZ_P: 0.005,
		Y_FUZZ: 7,
		Y_FUZZ_DIAG: 15,

		BLUEZONE_BOTTOM_CENTER: -67,
		BLUEZONE_BOTTOM_LIMIT: -55,

		BLUEZONE_TOP_CENTER: 831,
		BLUEZONE_TOP_LIMIT: 793,

		POPULATION_LIMIT: 32,
		EVOLUTION_STAGES: 64,
		MUTANT_PROBABLITY: 0.05,
		STEADY_STAGES_X: 3,
		STEADY_STAGES_MAX: 20,

		COEFF_A_MULTIPLIER: 10,
		COEFF_A_SAME_RADICAL: 4,
		COEFF_A_SHAPE_LOST: 25,
		COEFF_A_SHAPE_LOST_XX: 250,
		COEFF_A_TOPBOT_MERGED: 3,
		COEFF_A_TOPBOT_MERGED_SR: 15,
		COEFF_A_FEATURE_LOSS: 1000,
		COEFF_A_FEATURE_LOSS_XR: 30,
		COEFF_A_RADICAL_MERGE: 1,
		COEFF_C_MULTIPLIER: 100,
		COEFF_C_SHAPE_LOST_XX: 250,
		COEFF_C_FEATURE_LOSS: 12,
		COEFF_C_SAME_RADICAL: 6,
		COEFF_S: 1E8,
		COEFF_DISTORT: 5,
		COEFF_PBS_MIN_PROMIX: 3,
		COEFF_TOP_BOT_PROMIX: 5,
		COEFF_STRICT_TOP_BOT_PROMIX: 30,
		ABLATION_IN_RADICAL: 1,
		ABLATION_RADICAL_EDGE: 2,
		ABLATION_GLYPH_EDGE: 30,
		ABLATION_GLYPH_HARD_EDGE: 50,
		COEFF_PORPORTION_DISTORTION: 8,
		REBALANCE_PASSES: 16,
		MIN_OVERLAP_RATIO: 0.2,
		COLLISION_MIN_OVERLAP_RATIO: 0.15,
		SIDETOUCH_LIMIT: 0.05,
		TBST_LIMIT: 0.25,
		DO_SHORT_ABSORPTION: true,
		DONT_ADJUST_STEM_WIDTH: false,
		WIDTH_ALLOCATION_PASSES: 5,
		STACK_DEPTH: 200,

		RISE: 0, SINK: 0,
		RISE_DIAGH: 0, SINK_DIAGL: 0,
		GRAVITY: 0,
		CONCENTRATE: 0,
		CHEBYSHEV_4: 0,
		CHEBYSHEV_5: 0,
		TOP_CUT: 0,
		BOTTOM_CUT: 0,
		TOP_CUT_DIAGH: 0,
		BOTTOM_CUT_DIAGL: 0,
		TOP_CUT_DIAG_DIST: 0,
		BOTTOM_CUT_DIAG_DIST: 0
	};
};
exports.defaultStrategy = DefaultStrategy();
exports.from = function (argv, parameterFile) {
	var strategy = DefaultStrategy();
	if (parameterFile && parameterFile.hinting) {
		for (var k in parameterFile.hinting) {
			strategy[k] = parameterFile.hinting[k];
		}
	} else {
		for (var prop in strategy) {
			if (argv[prop]) {
				strategy[prop] = isFinite(argv[prop] - 0) ? argv[prop] : strategy[prop];
			}
		}
	}
	return strategy;
};
