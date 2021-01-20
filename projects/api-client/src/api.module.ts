import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ActionControllerService } from './api/actionController.service';
import { AdditionalTestControllerService } from './api/additionalTestController.service';
import { AggregateReportControllerService } from './api/aggregateReportController.service';
import { CampaignControllerService } from './api/campaignController.service';
import { CampaignFormDataControllerService } from './api/campaignFormDataController.service';
import { CampaignFormMetaControllerService } from './api/campaignFormMetaController.service';
import { CaseControllerService } from './api/caseController.service';
import { ClassificationControllerService } from './api/classificationController.service';
import { ClinicalVisitControllerService } from './api/clinicalVisitController.service';
import { CommunityControllerService } from './api/communityController.service';
import { ContactControllerService } from './api/contactController.service';
import { DiseaseConfigurationControllerService } from './api/diseaseConfigurationController.service';
import { DistrictControllerService } from './api/districtController.service';
import { EventControllerService } from './api/eventController.service';
import { EventParticipantControllerService } from './api/eventParticipantController.service';
import { ExternalVisitsControllerService } from './api/externalVisitsController.service';
import { FacilityControllerService } from './api/facilityController.service';
import { FeatureConfigurationControllerService } from './api/featureConfigurationController.service';
import { InfoControllerService } from './api/infoController.service';
import { InfrastructureControllerService } from './api/infrastructureController.service';
import { OutbreakControllerService } from './api/outbreakController.service';
import { PathogenTestControllerService } from './api/pathogenTestController.service';
import { PersonControllerService } from './api/personController.service';
import { PointOfEntryControllerService } from './api/pointOfEntryController.service';
import { PrescriptionControllerService } from './api/prescriptionController.service';
import { RegionControllerService } from './api/regionController.service';
import { SampleControllerService } from './api/sampleController.service';
import { SormasToSormasControllerService } from './api/sormasToSormasController.service';
import { TaskControllerService } from './api/taskController.service';
import { TreatmentControllerService } from './api/treatmentController.service';
import { UserControllerService } from './api/userController.service';
import { UserRoleConfigControllerService } from './api/userRoleConfigController.service';
import { VisitControllerService } from './api/visitController.service';
import { WeeklyReportControllerService } from './api/weeklyReportController.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ActionControllerService,
    AdditionalTestControllerService,
    AggregateReportControllerService,
    CampaignControllerService,
    CampaignFormDataControllerService,
    CampaignFormMetaControllerService,
    CaseControllerService,
    ClassificationControllerService,
    ClinicalVisitControllerService,
    CommunityControllerService,
    ContactControllerService,
    DiseaseConfigurationControllerService,
    DistrictControllerService,
    EventControllerService,
    EventParticipantControllerService,
    ExternalVisitsControllerService,
    FacilityControllerService,
    FeatureConfigurationControllerService,
    InfoControllerService,
    InfrastructureControllerService,
    OutbreakControllerService,
    PathogenTestControllerService,
    PersonControllerService,
    PointOfEntryControllerService,
    PrescriptionControllerService,
    RegionControllerService,
    SampleControllerService,
    SormasToSormasControllerService,
    TaskControllerService,
    TreatmentControllerService,
    UserControllerService,
    UserRoleConfigControllerService,
    VisitControllerService,
    WeeklyReportControllerService,
  ],
})
export class ApiModule {
  public static forRoot(configurationFactory: () => Configuration) {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule, @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
