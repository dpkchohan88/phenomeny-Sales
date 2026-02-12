import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import StepContent from "./StepContent";
import BuilderSummary from "./BuilderSummary";

const TOTAL_STEPS = 4;
const SUMMARY_STEP = 5;

const AppBuilderSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const topRef = useRef(null);

  const [formData, setFormData] = useState({
    platform_type: null,
    access_model: null,
    experience_type: [],
    commerce_features: [],
    user_management_features: [],
    operations_features: [],
    reporting_features: [],
    admin_controls: [],
    integrations: [],
    automation_features: [],
    scale_level: null,
    growth_features: [],
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = (step) => {
    if (step === 1) {
      return (
        formData.platform_type &&
        formData.access_model &&
        formData.experience_type.length > 0
      );
    }
    if (step === 2) {
      const l2Count =
        formData.commerce_features.length +
        formData.user_management_features.length +
        formData.operations_features.length +
        formData.reporting_features.length;
      return l2Count > 0;
    }
    if (step === 3) {
      const l3Count =
        formData.admin_controls.length +
        formData.integrations.length +
        formData.automation_features.length;
      return l3Count > 0;
    }
    if (step === 4) {
      return formData.scale_level;
    }
    return true;
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNext = () => {
    if (currentStep < SUMMARY_STEP) {
      setCurrentStep((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      scrollToTop();
    }
  };

  return (
    <section
      ref={topRef}
      className="relative py-24 bg-[#0A0F16] overflow-hidden"
    >
      {/* Subtle Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Design your custom digital architecture in four structured steps.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="relative rounded-3xl p-6 md:p-10 border border-white/10 backdrop-blur-2xl bg-[rgba(15,18,24,0.6)] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Progress */}
          {currentStep < SUMMARY_STEP && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
            />
          )}

          <div className="min-h-[400px] mt-10">
            <AnimatePresence mode="wait">
              {currentStep === SUMMARY_STEP ? (
                <BuilderSummary
                  key="summary"
                  formData={formData}
                  onBack={handleBack}
                />
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-10"
                >
                  <StepContent
                    step={currentStep}
                    formData={formData}
                    updateFormData={updateFormData}
                  />

                  {/* Validation Hint */}
                  {!isStepValid(currentStep) && (
                    <div className="text-center text-sm text-rose-400 bg-rose-400/5 py-2 rounded-lg border border-rose-400/20">
                      Please complete the required selections to continue.
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                    {currentStep > 1 && (
                      <Button
                        onClick={handleBack}
                        variant="ghost"
                        className="h-12 px-6 text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                    )}

                    <Button
                      onClick={handleNext}
                      disabled={!isStepValid(currentStep)}
                      className={cn(
                        "ml-auto h-12 px-8 rounded-xl font-semibold transition-all duration-300",
                        isStepValid(currentStep)
                          ? "bg-violet-500 hover:bg-violet-400 text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                          : "bg-white/5 text-gray-500 cursor-not-allowed"
                      )}
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBuilderSection;
